import '../styles/global.css'

import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Layout from '../components/Layout'

function getLibrary(provider?: any) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ReactProvider>
    
  )
}

export default MyApp
