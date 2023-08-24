import { createGlobalStyle } from 'styled-components';

import { BREAKPOINTS } from './breakpoints';

export const Global = createGlobalStyle`
  html {
    font-size: 6.25%;//16px
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

  svg {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    html {
      font-size: 5.46875%; //14px
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    html {
      font-size: 4.6875%; //12px
    }
  }
`;
