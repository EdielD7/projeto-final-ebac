import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#FFF',
  rosa1: '#FFF8F2',
  rosa2: '#FFEBD9',
  rosa3: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.rosa1};
    color: ${cores.rosa3};
  }
`
