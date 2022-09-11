import "styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "components/header/Header";
import PageOverlay from "components/base/PageOverlay";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
        <Head>
            <title>Zii Donato</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Zii Donato's personal website" />
            <meta name="author" content="Zii Donato" />
            <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" sizes="16x16" href="/favicon/favicon-16x16.png" />
        </Head>
      <Header />
      <PageOverlay>
        <Component {...pageProps} />
      </PageOverlay>
      <div id="portals" />
    </>
  );
}

export default MyApp;
