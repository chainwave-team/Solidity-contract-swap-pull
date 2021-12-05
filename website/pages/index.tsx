import type { NextPage } from 'next'
import Head from 'next/head'
import Features from '../components/features'
import HomeHeader from '../components/home-header'
import ImageGrid from '../components/image-grid'
import TextSection, { CenteredTextSection } from '../components/text-section'
import { description, title } from '../config'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CryptoDicks</title>
        <meta name="description" content={description.slice(0, 140) + "..."} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader title={title} description={description} />
      <ImageGrid disableTopMargin />
      <CenteredTextSection text="An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla..." />
      <Features />
      <ImageGrid />
      <TextSection title="what is CryptoDicks?" text=""/>
      <TextSection title="how I can mint my CryptoDick?" text=""/>
      <TextSection title="how I can buy-sell CryptoDicks?" text=""/>
      <TextSection title="why?" text=""/>
      <ImageGrid />
    </>
  )
}

export default Home
