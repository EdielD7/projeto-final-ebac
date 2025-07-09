import Button from '../Button'
import { InputGroup, Inputs, Row, Title } from './styles'

type Props = {
  onBackToDelivery: () => void
}

const PaymentForm = ({ onBackToDelivery }: Props) => {
  return (
    <form>
      <Title>Pagamento - Valor a pagar: R$ 190,90</Title>
      <Inputs>
        <InputGroup>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <input id="cardOwner" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="text" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input id="expiresMonth" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input id="expiresYear" type="text" />
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
    </form>
  )
}

export default PaymentForm
