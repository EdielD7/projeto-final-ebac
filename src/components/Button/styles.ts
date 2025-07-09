import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

// Estilos compartilhados
const baseStyles = css`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  font-weight: bold;
  display: inline-block;
`

// Div com os estilos base
export const Tag = styled.div`
  ${baseStyles}
  font-size: 12px;
  padding: 6px 4px;
  margin-left: 8px;
  text-transform: capitalize;
`

// Link com os estilos base
export const ButtonLink = styled(Link)`
  ${baseStyles}
  text-decoration: none;
  font-size: 14px;
  padding: 4px 6px;
`

export const DefaultButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  border: none;
  height: 24px;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
