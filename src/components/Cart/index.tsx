import {
  CartContainer,
  CartItem,
  Overlay,
  Total,
  ValorContainer,
  Sidebar
} from './styles'

import marguerita from '../../assets/images/marguerita.png'
import { Button } from '../Product/styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={marguerita} alt="star wars" />
          <div>
            <h3>Nome do produto</h3>
            <span>R$ 250</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={marguerita} alt="star wars" />
          <div>
            <h3>Nome do produto</h3>
            <span>R$ 250</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <ValorContainer>
        <Total>Valor total</Total>
        <Total>R$ 182,70</Total>
      </ValorContainer>
      <Button title="Clique para continuar com a entrega">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
