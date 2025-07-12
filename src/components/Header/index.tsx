import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/back.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <S.RestaurantsLink to="/">
          <S.MobileImg src={back} alt="Voltar para restaurantes" />
          <p>Restaurantes</p>
        </S.RestaurantsLink>

        <S.ProfileLogo src={logo} alt="EFOOD" />
        <S.CartLink onClick={openCart}>
          <S.MobileImg src={carrinho} alt="Carrinho" />
          <p>{items.length} produto(s) no carrinho</p>
        </S.CartLink>
      </div>
    </S.HeaderBar>
  )
}

export default Header
