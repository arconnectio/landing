import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/fonts/Manrope-Light.woff2") format('woff2');
  }
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/fonts/Manrope-Regular.woff2") format('woff2');
  }
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/fonts/Manrope-Medium.woff2") format('woff2');
  }
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/fonts/Manrope-SemiBold.woff2") format('woff2');
  }
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/fonts/Manrope-Bold.woff2") format('woff2');
  }
  @font-face {
    font-family: "ManropeLocal";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/fonts/Manrope-ExtraBold.woff2") format('woff2');
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 500px;
  }
  body, button, input, select, textarea {
    font-family: "ManropeLocal", "Manrope VF", "Manrope", sans-serif !important;
  }
`;
