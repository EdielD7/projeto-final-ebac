import { FormikProps } from 'formik'
import Button from '../Button'
import { InputGroup, Inputs, Row, Title } from './styles'
import { FormikData } from '.'

type Props = {
  formik: FormikProps<FormikData>
  onBackToDelivery: () => void
}

const PaymentForm = ({ formik, onBackToDelivery }: Props) => {
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
      <Title>Pagamento - Valor a pagar: R$ 190,90</Title>
      <Inputs>
        <InputGroup>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <input
            id="cardOwner"
            type="text"
            name="cardOwner"
            value={formik.values.cardOwner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small>{getErrorMessage('cardOwner', formik.errors.cardOwner)}</small>
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>
              {getErrorMessage('cardNumber', formik.errors.cardNumber)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>{getErrorMessage('cvv', formik.errors.cvv)}</small>
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={formik.values.expiresMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>
              {getErrorMessage('expiresMonth', formik.errors.expiresMonth)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={formik.values.expiresYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small>
              {getErrorMessage('expiresYear', formik.errors.expiresYear)}
            </small>
          </InputGroup>
        </Row>
      </Inputs>
      <Button
        variant="button"
        type="submit"
        title="Clique para finalizar a compra"
      >
        Finalizar pagamento
      </Button>
      <Button
        variant="button"
        title="Clique para voltar para a edição de endereço"
        onClick={onBackToDelivery}
      >
        Voltar para a edição de endereço
      </Button>
    </>
  )
}

export default PaymentForm
