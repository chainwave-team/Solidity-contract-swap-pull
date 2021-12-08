import type { NextPage } from 'next'
import { AppContext } from 'next/app'
import Head from 'next/head'
import { getRandomImages } from '../api/getRandomImages'
import Features from '../components/features'
import HomeHero from '../components/HomeHero'
import ImageGrid from '../components/image-grid'
import TextSection, { CenteredTextSection } from '../components/text-section'
import { description, title } from '../config'

const Home: NextPage<{ images: string[][] }> = ({ images }) => {
  return (
    <>
      <Head>
        <title>CryptoDicks</title>
        <meta name="description" content={description.slice(0, 140) + "..."} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHero title={title} description={description} />
      <ImageGrid images={images[0]} disableTopMargin />
      <CenteredTextSection text="An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla..." />
      <Features />
      <ImageGrid images={images[1]} />
      <TextSection title="what is CryptoDicks?" text=""/>
      <TextSection title="how I can mint my CryptoDick?" text=""/>
      <TextSection title="how I can buy-sell CryptoDicks?" text=""/>
      <TextSection title="why?" text=""/>
      <ImageGrid images={images[2]} />
    </>
  )
}

export default Home

// Fetch images for API only on build
export async function getStaticProps(context: AppContext) {
  const randomImages = getRandomImages(16 * 3)
  return {
    props: {
      images: [
        randomImages.slice(0, 16),
        randomImages.slice(16, 32),
        randomImages.slice(32, 48),
      ]
    }, // will be passed to the page component as props
  }
}
