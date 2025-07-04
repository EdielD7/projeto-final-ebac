import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
`

export const CardBody = styled.div`
  padding: 8px;
  border-style: solid;
  border-width: 0 1px 1px;
  border-color: ${cores.rosaEscuro};
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 700;
`
export const Nota = styled.div`
  display: flex;
  gap: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`
