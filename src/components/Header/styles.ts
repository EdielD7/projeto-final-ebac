import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores } from '../../styles'
import headerbg from '../../assets/images/header_bg.svg'

export const HeaderBar = styled.header`
  width: 100%;
  background-color: ${cores.rosa};
  background-image: url(${headerbg});
  height: 160px; // Altura fixa para a barra de navegação

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
  }
`

export const ProfileLogo = styled.img`
  height: 58px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const RestaurantsLink = styled(Link)`
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
