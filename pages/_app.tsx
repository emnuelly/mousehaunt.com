import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { StoreProvider } from "../contexts/StoreContext";
import { OrdersContextProvider } from "../contexts/OrdersContext";

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
        <OrdersContextProvider>
          <Component {...pageProps} />
        </OrdersContextProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
export default MyApp;
