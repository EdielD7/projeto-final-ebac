import { FormikProps } from 'formik'
import Button from '../Button'
import { InputGroup, Inputs, Row, Title } from './styles'
import { FormikData } from '.'

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

  return (
    <>
      <Title>Entrega</Title>
      <Inputs>
        <InputGroup>
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
        </InputGroup>
        <InputGroup>
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
        </InputGroup>
        <InputGroup>
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
        </InputGroup>
        <Row>
          <InputGroup>
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
          </InputGroup>
          <InputGroup>
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
          </InputGroup>
        </Row>
        <InputGroup>
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
        </InputGroup>
      </Inputs>
      <Button
        variant="button"
        title="Clique para ir para o pagamento"
        onClick={onGoToPayment}
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
