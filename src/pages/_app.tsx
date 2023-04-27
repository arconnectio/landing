import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle
} from "styled-components";
import { Manrope } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#AB9AFF" />
        <meta name="msapplication-TileColor" content="#AB9AFF" />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </div>
  );
}

const theme: DefaultTheme = {
  accent: "171, 154, 255",
  background: "255, 255, 255",
  primaryText: "0, 0, 0",
  secondaryText: "73, 68, 100"
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  ::selection {
    background-color: rgba(${(props) => props.theme.accent}, .35);
  }
`;
