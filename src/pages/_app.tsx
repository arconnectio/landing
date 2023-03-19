import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  );
}
