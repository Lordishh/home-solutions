import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
  :root{
  /* colors */
  --background-color: #FFFFFF;
  --dark: #0C0C0B
  --yellow: #F9D07C
  --gray: #878883
  --white: #FFFFFF;
  --black: #000000;
  /* others */
  --header-height: 70px;
  /* Typography */
  --font-primary: 'Roboto', sans-serif;
  --font-title: 'Nunito', sans-serif;

}
  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }
  body {
    background-color: var(--background-color);
    font-family: var(--font-primary);
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
  h1{
    font-family: var(--font-title);
  }
  ul, li {
    list-style: none;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  button {
    font-family: var(--font-primary);
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.2rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: var(--yellow);
  }
`;

export default GlobalStyles;