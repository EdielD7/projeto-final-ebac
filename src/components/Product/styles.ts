import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 900;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
`

export const Img = styled.img`
  display: block;
  width: 304px;
  height: 167px;
  object-fit: cover;
`

export const Button = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
