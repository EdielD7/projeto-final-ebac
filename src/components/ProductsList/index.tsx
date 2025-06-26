import ProductData from '../../models/ProductData'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  products: ProductData[]
}

const ProductsList = ({ products }: Props) => (
  <Container>
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
