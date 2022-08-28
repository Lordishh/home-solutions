import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
  :root{
  /* colors */
  --dark: #0C0C0B
  --yellow: #F9D07C
  --gray: #878883
  --white: #FFFFFF;
  --black: #000000;
  /* others */
  --header-height: 70px;
  /* Typography */
  --font-primary: 'Roboto', sans-serif;
  --font-secondary: 'Roboto', sans-serif;

}
  html {
    font-size: 10px;
  }
  body {
    background-color: red;
    font-family: --font-primary;
  }
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  img, svg {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;