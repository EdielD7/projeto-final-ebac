import { CardapioItem } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  cardapio: CardapioItem[]
}

const ProductsList = ({ cardapio }: Props) => (
  <Container>
    <div className="container">
      <List>
        {cardapio.map((item) => (
          <Product
            key={item.id}
            image={item.foto}
            title={item.nome}
            description={item.descricao}
            portion={item.porcao}
            cardapioitem={item}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
