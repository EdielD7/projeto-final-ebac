import styled from 'styled-components'
import { cores } from '../../styles'
import headerbg from '../../assets/images/header_bg.svg'

export const HeaderBar = styled.header`
  width: 100%;
  height: 360px;
  background-color: ${cores.rosa2};
  background-image: url(${headerbg});
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
`
