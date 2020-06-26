import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: #efeef1;
    color: #EFFFFA;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
  }
  `;

export default GlobalStyles;
