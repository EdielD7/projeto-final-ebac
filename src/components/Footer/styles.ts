import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
  width: 100%;
  background-color: ${cores.rosa};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Social = styled.ul`
  display: flex;
  gap: 8px;

  li {
    list-style: none;
    width: 24px;
  }
`

export const Texto = styled.p`
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  margin-top: 80px;
`
