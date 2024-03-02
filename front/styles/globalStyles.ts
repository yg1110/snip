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
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
