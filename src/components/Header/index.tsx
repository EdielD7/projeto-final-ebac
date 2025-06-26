import { useLocation } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  CartLink,
  Titulo,
  RestaurantesLink,
  ProfileLogo,
  HomeLogo
} from './styles' // Ajustaremos os styles em breve

import logo from '../../assets/images/logo.svg'

const Header = () => {
  const location = useLocation() // Hook para obter a localização atual
  const isProfilePage = location.pathname.startsWith('/profile') // Verifica se a rota começa com /profile/

  return (
    // Passamos a prop 'isProfilePage' para o nosso container de estilo
    <HeaderBar isProfilePage={isProfilePage}>
      <div className="container">
        {/* Renderização condicional dos elementos do Header */}
        {isProfilePage ? (
          <>
            <Links>
              <li>
                <RestaurantesLink to="/">Restaurantes</RestaurantesLink>
              </li>
            </Links>
            <ProfileLogo src={logo} alt="EFOOD" />
            <CartLink>0 produto(s) no carrinho</CartLink>
          </>
        ) : (
          // Conteúdo original da Home Page
          <>
            <HomeLogo src={logo} alt="EFOOD" />
            <Titulo>
              Viva experiências gastronômicas
              <br /> no conforto da sua casa
            </Titulo>
          </>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
