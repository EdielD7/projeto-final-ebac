import { FormikProps } from 'formik'

import Button from '../Button'

import { FormikData } from '.'

import * as S from './styles'

type Props = {
  formik: FormikProps<FormikData>
  onBackToCart: () => void
  onGoToPayment: () => void
}

const DeliveryForm = ({ formik, onBackToCart, onGoToPayment }: Props) => {
  const getErrorMessage = (fieldName: keyof FormikData, message?: string) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors

    if (isTouched && isInvalid) {
      return message || formik.errors[fieldName]
    }

    return ''
  }

  const handleContinue = async () => {
    // Lista dos campos que pertencem a ESTA etapa
    const deliveryFields: (keyof FormikData)[] = [
      'receiver',
      'address',
      'city',
      'zipCode',
      'number'
    ]

    // Valida o formulário inteiro e espera pela resposta
    const errors = await formik.validateForm()

    // Marca todos os campos desta etapa como "tocados" para que os erros apareçam
    deliveryFields.forEach((field) => formik.setFieldTouched(field))

    // Verifica se algum dos campos desta etapa possui um erro no objeto de erros
    const hasDeliveryErrors = deliveryFields.some((field) => errors[field])

    // Se NÃO houver erros de entrega, navegue para o pagamento
    if (!hasDeliveryErrors) {
      onGoToPayment()
    }
  }

  return (
    <>
      <S.Title>Entrega</S.Title>
      <S.Inputs>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            name="receiver"
            value={formik.values.receiver}
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>{getErrorMessage('receiver', formik.errors.receiver)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>{getErrorMessage('address', formik.errors.address)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>{getErrorMessage('city', formik.errors.city)}</small>
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{getErrorMessage('zipCode', formik.errors.zipCode)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              type="text"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{getErrorMessage('number', formik.errors.number)}</small>
          </S.InputGroup>
        </S.Row>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            type="text"
            name="complement"
            value={formik.values.complement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>
            {getErrorMessage('complement', formik.errors.complement)}
          </small>
        </S.InputGroup>
      </S.Inputs>
      <Button
        variant="button"
        title="Clique para ir para o pagamento"
        onClick={handleContinue}
      >
        Continuar com o pagamento
      </Button>
      <Button
        variant="button"
        title="Clique para voltar ao carrinho"
        onClick={onBackToCart}
      >
        Voltar para o carrinho
      </Button>
    </>
  )
}

export default DeliveryForm
