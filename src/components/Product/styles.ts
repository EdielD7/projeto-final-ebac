import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosa};
  display: block;
  /* max-width: 320px; */
  width: 100%;
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
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const ModalButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.rosaEscuro};
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.rosaEscuro};

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  > img {
    width: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;
  color: #fff;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  h3,
  p {
    margin-bottom: 16px;
  }
`
