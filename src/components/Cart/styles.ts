import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.svg'
import { DefaultButton } from '../Button/styles'

type TitleProps = {
  $variant?: 'cart'
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
    text-align: center;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  ${DefaultButton} {
    margin-bottom: 8px;
  }
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`

export const Title = styled.h2<TitleProps>`
  color: ${({ $variant }) =>
    $variant === 'cart' ? cores.rosaEscuro : cores.rosa};
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
`

// export const ValorContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 40px;
//   margin-bottom: 16px;
// `

export const TotalValue = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.rosa};
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  background-color: ${cores.rosa};
  display: flex;
  padding: 8px 8px 12px;
  position: relative;
  color: ${cores.rosaEscuro};
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

// ... (mantenha todos os seus estilos existentes)

// Estilos para os formulários
export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.rosa};
    margin-bottom: 8px;
    display: block;
  }

  small {
    color: ${cores.rosa};
  }

  input {
    background-color: ${cores.rosa};
    border: 1px solid ${cores.rosa};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa}; // Usando a cor rosa claro do seu tema
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 24px;
  }
`
