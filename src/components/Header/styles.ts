import styled from 'styled-components'
import { cores } from '../../styles'
import headerbg from '../../assets/images/header_bg.svg'

export const HeaderBar = styled.header`
  width: 100%;
  background-color: ${cores.rosa};
  background-image: url(${headerbg});
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 138px;
  align-items: center;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
`
