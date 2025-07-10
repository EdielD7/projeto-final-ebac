import { CartItem, Title, TotalValue } from './styles'
import lixeira from '../../assets/images/lixeira.svg'
import Button from '../Button'
import { formataPreco } from '../../utils'
import { CardapioItem } from '../../pages/Home'

// Tipagem das Props que o componente recebe do pai
type Props = {
  items: CardapioItem[] // Você já deve ter esse tipo definido
  totalValue: number
  onRemoveItem: (id: number) => void
  onGoToDelivery: () => void
}

const CartView = ({
  items,
  totalValue,
  onRemoveItem,
  onGoToDelivery
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
      </>
    ) : (
      <p className="empty-text">
        O carrinho está vazio, adicione pelo menos um produto para continuar com
        a compra.
      </p>
    )}
  </>
)

export default CartView
