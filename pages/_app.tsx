import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { StoreProvider } from "../contexts/StoreContext";
import { MarketBoardProvider } from "../contexts/MarketPlaceContext";
import { MarketplaceContractProvider } from "../contexts/contracts/MarketplaceContractContext";

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
      <StoreProvider>
        <MarketplaceContractProvider>
          <MarketBoardProvider>
            <Component {...pageProps} />
          </MarketBoardProvider>
        </MarketplaceContractProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
export default MyApp;
