import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    scroll-behavior: smooth;
  }
   body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.secondary};
  }
  b {
    font-weight: 700;
  }
  ::selection {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }
  a:focus,a:hover {
    text-decoration: none;
  }
  hr {
    border-top: 3px solid #1b1b1b;
    margin: 0;
  }
`;
