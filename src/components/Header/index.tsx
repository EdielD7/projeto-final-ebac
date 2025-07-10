import { useLocation } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  CartLink,
  Titulo,
  RestaurantesLink,
  ProfileLogo,
  HomeLogo
} from './styles'

import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
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
            <Links>
              <li>
                <RestaurantesLink to="/">Restaurantes</RestaurantesLink>
              </li>
            </Links>
            <ProfileLogo src={logo} alt="EFOOD" />
            <CartLink onClick={openCart}>
              {items.length} produto(s) no carrinho
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
