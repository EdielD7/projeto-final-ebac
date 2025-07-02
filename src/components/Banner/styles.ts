import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Tipo = styled.p`
  margin-top: 24px;
  font-size: 36px;
  font-weight: 100;
  text-transform: capitalize;
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 32px;
`
