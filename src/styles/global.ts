import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: ${({ theme }) => theme.colors.light};
    overflow-x: hidden;
  }
  body, button, input, select {
    font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: inherit;
  }
`;
