import Button from '../Button'

import lixeira from '../../assets/images/lixeira.svg'

import { formataPreco } from '../../utils'
import { CardapioItem } from '../../pages/Home'

import * as S from './styles'

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
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <S.Title $variant="cart">{item.nome}</S.Title>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => onRemoveItem(item.id)}>
                <img src={lixeira} alt="Remover item" />
              </button>
            </S.CartItem>
          ))}
        </ul>
        <S.TotalValue>
          Valor total <span>{formataPreco(totalValue)}</span>
        </S.TotalValue>
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
