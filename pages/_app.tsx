import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
// import { MoralisProvider } from "react-moralis";
// import config from "../utils/config";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;

    color: white;
    background-color: #131524;
    font-family: "Bebas Neue Pro Bold", sans-serif;

    @font-face {
      font-family: "Bebas Neue Pro Bold";
      src: url("/fonts/bebas-neue-pro/Bebas Neue Pro Bold.otf");
      font-display: swap;
    }
    @font-face {
      font-family: "Bebas Neue Pro";
      src: url("/fonts/bebas-neue-pro/Bebas Neue Pro Regular.otf");
      font-display: swap;
    }
    @font-face {
      font-family: "SF Pro Display";
      src: url("/fonts/sf-pro-display/SFPRODISPLAYREGULAR.OTF");
      font-display: swap;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {/* <MoralisProvider
        appId={config.moralis.appId}
        serverUrl={config.moralis.serverUrl}
      > */}
      <Component {...pageProps} />
      {/* </MoralisProvider> */}
    </ThemeProvider>
  );
}
export default MyApp;