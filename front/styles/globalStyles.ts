'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  body {
    padding: 0;
    margin: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
