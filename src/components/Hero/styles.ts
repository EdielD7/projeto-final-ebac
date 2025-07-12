import styled from 'styled-components'
import headerbg from '../../assets/images/header_bg.svg'
import { breakpoints, cores } from '../../styles'

export const HeroBar = styled.header`
  width: 100%;
  height: 360px;
  background-color: ${cores.rosa};
  background-image: url(${headerbg});
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 58px;
  margin-bottom: 138px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  max-width: 540px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
