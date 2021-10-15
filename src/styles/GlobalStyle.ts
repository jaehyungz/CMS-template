import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    font-family: 'Noto Sans', sans-serif;  
  }
  * {
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "Noto Sans";
    font-weight: 100;
    src: url(${require("../assets/fonts/NotoSansKR-Thin.woff2")}) format("woff2")
  }
  @font-face {
    font-family: "Noto Sans";
    font-weight: 300;
    src: url(${require("../assets/fonts/NotoSansKR-Light.woff2")}) format("woff2");
  }

  @font-face {
    font-family: "Noto Sans";
    font-weight: 400;
    src: url(${require("../assets/fonts/NotoSansKR-Regular.woff2")}) format("woff2");
  }

  @font-face {
    font-family: "Noto Sans";
    font-weight: 500;
    src: url(${require("../assets/fonts/NotoSansKR-Medium.woff2")}) format("woff2");
  }
  @font-face {
    font-family: "Noto Sans";
    font-weight: 800;
    src: url(${require("../assets/fonts/NotoSansKR-Bold.woff2")}) format("woff2");
  }

`;

export default GlobalStyle;
