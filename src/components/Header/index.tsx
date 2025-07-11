import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/back.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import * as S from './styles'

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
    <S.HeaderBar $isProfilePage={isProfilePage}>
      <div className="container">
        {isProfilePage ? (
          <div className="container">
            <S.RestaurantesLink to="/">
              <S.MobileImg src={back} alt="Restaurantes" />
              <p>Restaurantes</p>
            </S.RestaurantesLink>

            <S.ProfileLogo src={logo} alt="EFOOD" />
            <S.CartLink onClick={openCart}>
              <S.MobileImg src={carrinho} alt="Carrinho" />
              <p>{items.length} produto(s) no carrinho</p>
            </S.CartLink>
          </div>
        ) : (
          // Conteúdo original da Home Page
          <div className="container">
            <S.HomeLogo src={logo} alt="EFOOD" />
            <S.Titulo>
              Viva experiências gastronômicas
              <br /> no conforto da sua casa
            </S.Titulo>
          </div>
        )}
      </div>
    </S.HeaderBar>
  )
}

export default Header
