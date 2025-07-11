import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  HeaderBar,
  CartLink,
  Titulo,
  RestaurantesLink,
  ProfileLogo,
  HomeLogo,
  MobileImg
} from './styles'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/back.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const location = useLocation() // Hook para obter a localização atual
  const isProfilePage = location.pathname.startsWith('/profile') // Verifica se a rota começa com /profile/

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    // Passa a prop 'isProfilePage' para o nosso container de estilo
    <HeaderBar $isProfilePage={isProfilePage}>
      <div className="container">
        {isProfilePage ? (
          <div className="container">
            <RestaurantesLink to="/">
              <MobileImg src={back} alt="Restaurantes" />
              <p>Restaurantes</p>
            </RestaurantesLink>

            <ProfileLogo src={logo} alt="EFOOD" />
            <CartLink onClick={openCart}>
              <MobileImg src={carrinho} alt="Carrinho" />
              <p>{items.length} produto(s) no carrinho</p>
            </CartLink>
          </div>
        ) : (
          // Conteúdo original da Home Page
          <div className="container">
            <HomeLogo src={logo} alt="EFOOD" />
            <Titulo>
              Viva experiências gastronômicas
              <br /> no conforto da sua casa
            </Titulo>
          </div>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
