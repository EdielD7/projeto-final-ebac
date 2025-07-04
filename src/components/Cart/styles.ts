import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.svg'
import { Button } from '../Product/styles'

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
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  ${Button} {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 4px 0;
  }
`

export const ValorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const Total = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.rosa};
`

export const CartItem = styled.li`
  background-color: ${cores.rosa};
  display: flex;
  padding: 8px 8px 12px;
  position: relative;
  color: ${cores.rosaEscuro};
  margin-bottom: 16px;

  img {
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
