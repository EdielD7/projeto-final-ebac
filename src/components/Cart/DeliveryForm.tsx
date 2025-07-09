import Button from '../Button'
import { InputGroup, Inputs, Row, Title } from './styles'

type Props = {
  onBackToCart: () => void
  onGoToPayment: () => void
}

const DeliveryForm = ({ onBackToCart, onGoToPayment }: Props) => {
  return (
    <form>
      <Title>Entrega</Title>
      <Inputs>
        <InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" />
          </InputGroup>
        </Row>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" />
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
    </form>
  )
}

export default DeliveryForm
