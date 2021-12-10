import '../styles/global.css'

import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Layout from '../components/Layout/Layout'
import { description, title } from '../config'

function getLibrary(provider?: any) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description.slice(0, 140) + "..."} />
        <FontLinks />
        <FaviconMeta />
      </Head>

      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp

const FontLinks = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap" rel="stylesheet" />
  </>
)

const FaviconMeta = () => (
  <>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
  </>
)