import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import headerbg from '../../assets/images/header_bg.svg'
import { Link } from 'react-router-dom' // A importação é usada aqui

type HeaderBarProps = {
  $isProfilePage: boolean
}

export const HeaderBar = styled.header<HeaderBarProps>`
  width: 100%;
  background-color: ${cores.rosa};
  background-image: url(${headerbg});

  height: ${(props) => (props.$isProfilePage ? '138px' : '360px')};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => (props.$isProfilePage ? 'row' : 'column')};
    position: relative;
    height: 100%;
  }
`

const LogoBase = styled.img`
  height: 58px;
`

// Logo para a Home (sem posicionamento especial)
export const HomeLogo = styled(LogoBase)`
  margin-top: 40px;
`

// Logo para a página de Perfil (com posicionamento absoluto)
export const ProfileLogo = styled(LogoBase)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const RestaurantesLink = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  color: ${cores.rosaEscuro};
  font-size: 18px;

  p {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const CartLink = styled.a`
  /* display: flex; */
  cursor: pointer;
  font-weight: 900;
  font-size: 18px;

  p {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const MobileImg = styled.img`
  display: none;
  width: 32px;
  color: ${cores.rosaEscuro};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
