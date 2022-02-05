import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainTemplate from '../components/templates/MainTemplate'
import Providers from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </Providers>
  )
}

export default MyApp
