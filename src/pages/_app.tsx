import { useAnalytics } from "~/utils/analytics";
import { Manrope } from "next/font/google";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Head from "next/head";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle
} from "styled-components";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [optedInGA] = useAnalytics();

  useEffect(() => {
    // initially "optedInGA" is false, so if the user
    // opted out from analytics, it will never get
    // initialized
    if (!optedInGA) return;

    ReactGA.initialize("G-WQVBVMB5G6");
  }, [optedInGA]);

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
  * {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;

    @media screen and (max-width: 720px) {
      background-color: rgba(${(props) => props.theme.accent}, .08);
    }
  }

  ::selection {
    background-color: rgba(${(props) => props.theme.accent}, .35);
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;
