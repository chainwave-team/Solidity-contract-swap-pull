import type { NextPage } from 'next'
import { AppContext } from 'next/app'
import { getRandomImages } from '../api/getRandomImages'
import FeaturesSection from '../components/Home/FeaturesSection'
import HomeHero from '../components/Home/HomeHero'
import GridSection from '../components/Home/GridSection'
import TextSection, { CenteredTextSection } from '../components/TextSection'
import { description, title } from '../config'

const Home: NextPage<{ images: string[][] }> = ({ images }) => {
  return (
    <>
      <HomeHero title={title} description={description} />
      <GridSection images={images[0]} disableTopMargin />
      <CenteredTextSection text="An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla...An NFT Collection of 10K generated randomly bla bla bla..." />
      <FeaturesSection />
      <GridSection images={images[1]} />
      <TextSection title="what is CryptoDicks?" text=""/>
      <TextSection title="how I can mint my CryptoDick?" text=""/>
      <TextSection title="how I can buy-sell CryptoDicks?" text=""/>
      <TextSection title="why?" text=""/>
      <GridSection images={images[2]} />
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
