import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import Page from 'components/Page'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Page>
        <Header />
        <Component {...pageProps} />
      </Page>
      <div id="portals" />
    </>
  )
}

export default MyApp
