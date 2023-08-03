import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html {
    font-size: 6.25%;
  }

  body,
  input,
  button,
  textarea {
    color: ${({ theme }) => theme.WHITE_900};
    outline: none;
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.BLACK_900};
  }

  button {
    border: none;
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }

  a:visited {
    color: inherit;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
