import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  rosaClaro: '#FFF8F2',
  rosa: '#FFEBD9',
  rosaEscuro: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`
