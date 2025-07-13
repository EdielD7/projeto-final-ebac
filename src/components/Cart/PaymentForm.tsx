import { FormikProps } from 'formik'

import Button from '../Button'

import { FormikData } from '.'

import * as S from './styles'

type Props = {
  formik: FormikProps<FormikData>
  onBackToDelivery: () => void
}

const PaymentForm = ({ formik, onBackToDelivery }: Props) => {
  const checkInputHasError = (fieldName: keyof FormikData) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <S.Title>Pagamento - Valor a pagar: R$ 190,90</S.Title>
      <S.Inputs>
        <S.InputGroup>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <input
            id="cardOwner"
            type="text"
            name="cardOwner"
            value={formik.values.cardOwner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={checkInputHasError('cardOwner') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkInputHasError('cvv') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={formik.values.expiresMonth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={formik.values.expiresYear}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>
      </S.Inputs>
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
