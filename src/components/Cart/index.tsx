import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

import { Overlay, CartContainer, Sidebar } from './styles'

// Componentes para cada etapa do checkout
import CartView from './CartView'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'

// Para garantir a tipagem das etapas
export type Step = 'cart' | 'delivery' | 'payment'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  // 1. Estado para controlar a etapa atual
  const [currentStep, setCurrentStep] = useState<Step>('cart')

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const valorTotal = items.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)

  // 2. Funções de navegação que mudam o estado da etapa
  const goToDelivery = () => setCurrentStep('delivery')
  const goToPayment = () => setCurrentStep('payment')
  const goToCart = () => setCurrentStep('cart')

  // 3. Função que decide qual componente renderizar
  const renderStepComponent = () => {
    switch (currentStep) {
      case 'delivery':
        return (
          <DeliveryForm onBackToCart={goToCart} onGoToPayment={goToPayment} />
        )
      case 'payment':
        return <PaymentForm onBackToDelivery={goToDelivery} />
      case 'cart':
      default:
        return (
          <CartView
            items={items}
            totalValue={valorTotal}
            onRemoveItem={removeItem}
            onGoToDelivery={goToDelivery}
          />
        )
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>{renderStepComponent()}</Sidebar>
    </CartContainer>
  )
}

export default Cart
