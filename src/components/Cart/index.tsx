import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import CartView from './CartView'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import * as S from './styles'

// Componentes para cada etapa do checkout

import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

export interface FormikData {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string

  cardOwner: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

// Para garantir a tipagem das etapas
export type Step = 'cart' | 'delivery' | 'payment'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  // 1. Estado para controlar a etapa atual
  const [currentStep, setCurrentStep] = useState<Step>('cart')

  const [orderId, setOrderId] = useState('')

  const [purchase, { data }] = usePurchaseMutation()

  const formik = useFormik({
    initialValues: {
      // Campos de Entrega
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      // Campos de Pagamento
      cardOwner: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      // Validações de Entrega
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),

      // Validações de Pagamento (poderiam ser mais complexas)
      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            owner: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  // const closeCart = () => {
  //   dispatch(close())
  // }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const valorTotal = items.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)

  useEffect(() => {
    if (data) {
      setOrderId(data.orderId)
      dispatch(clear())
    }
  }, [data, dispatch])

  const goToDelivery = () => setCurrentStep('delivery')
  const goToPayment = () => setCurrentStep('payment')
  const goToCart = () => setCurrentStep('cart')

  const concludeAndClose = () => {
    dispatch(close())
    setCurrentStep('cart')
    setOrderId('')
  }

  const renderStepComponent = () => {
    switch (currentStep) {
      case 'delivery':
        return (
          <DeliveryForm
            formik={formik}
            onBackToCart={goToCart}
            onGoToPayment={goToPayment}
          />
        )
      case 'payment':
        return <PaymentForm formik={formik} onBackToDelivery={goToDelivery} />
      case 'cart':
      default:
        return (
          <CartView
            items={items}
            totalValue={valorTotal}
            onRemoveItem={removeItem}
            onGoToDelivery={goToDelivery}
            onClose={concludeAndClose}
          />
        )
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={concludeAndClose} />
      <S.Sidebar>
        {orderId ? (
          <Confirmation orderId={orderId} onConclude={concludeAndClose} />
        ) : (
          <form onSubmit={formik.handleSubmit}>{renderStepComponent()}</form>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
