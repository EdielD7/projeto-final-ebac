import { CartItem, Title, TotalValue } from './styles'
import lixeira from '../../assets/images/lixeira.svg'
import Button from '../Button'
import { formataPreco } from '../../utils'
import { CardapioItem } from '../../pages/Home'

type Props = {
  items: CardapioItem[]
  totalValue: number
  onRemoveItem: (id: number) => void
  onGoToDelivery: () => void
  onClose: () => void
}

const CartView = ({
  items,
  totalValue,
  onRemoveItem,
  onGoToDelivery,
  onClose
}: Props) => (
  <>
    {items.length > 0 ? (
      <>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <Title $variant="cart">{item.nome}</Title>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => onRemoveItem(item.id)}>
                <img src={lixeira} alt="Remover item" />
              </button>
            </CartItem>
          ))}
        </ul>
        <TotalValue>
          Valor total <span>{formataPreco(totalValue)}</span>
        </TotalValue>
        <Button
          title="Clique para continuar com a entrega"
          variant="button"
          onClick={onGoToDelivery}
        >
          Continuar com a entrega
        </Button>
        <Button
          title="Continuar comprando"
          variant="button"
          type="button"
          onClick={onClose}
        >
          Voltar para o restaurante
        </Button>
      </>
    ) : (
      <>
        <p className="empty-text">
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra.
        </p>
        <div style={{ marginTop: '16px' }}>
          <Button
            title="Escolher produtos"
            variant="button"
            type="button"
            onClick={onClose}
          >
            Escolher produtos
          </Button>
        </div>
      </>
    )}
  </>
)

export default CartView
