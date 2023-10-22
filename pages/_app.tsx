import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthUserProvider } from '../context/AuthContext'
import '../locales'

function app({ Component, pageProps }: AppProps) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default app

