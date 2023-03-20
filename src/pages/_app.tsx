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
      <Component {...pageProps} />
    </div>
  );
}
