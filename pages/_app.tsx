import "styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "components/header/Header";
import PageOverlay from "components/base/PageOverlay";
import {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <PageOverlay>
        <Component {...pageProps} />
      </PageOverlay>
      <div id="portals" />
    </>
  );
}

export default MyApp;
