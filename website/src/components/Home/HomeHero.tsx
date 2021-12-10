import Image from 'next/image'

import gif from "../../../dicks.gif"
import { openSeaCollectionUrl } from '../../config'
import useWeb3 from '../../hooks/useWeb3'
import Button from "../Button"

interface PropTypes {
    title: string
    description: string
}

function HomeHero({ title, description}: PropTypes) {
  const { active, connect, mint, mintedId } = useWeb3()

  return (
    <header className="lg:min-h-screen lg:-mt-20 px-6 max-w-6xl mx-auto flex">
      <div className="w-full m-auto lg:flex">
        <div className="w-100 lg:w-1/2 flex py-6">
          <div style={{ aspectRatio: "1/1", maxWidth: 600 }} className="relative m-auto w-full rounded-2xl overflow-hidden opacity-5">
            <Image src={gif} alt={"CryptoDicks"} layout="fill" />
          </div>
        </div>
        <div className="w-100 lg:w-1/2 lg:ml-6 mb-6 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-50 mt-10 sm:mt-0 mb-8 sm:mb-10">
            {title}
          </h1>
          <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6 	">
            {description}
            10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are DICKs.
          </p>

          <div className="flex flex-wrap mt-6">
            {active 
              ? <Button variant="primary" onClick={mint}>Mint your NFT</Button>
              : <Button variant="primary" onClick={connect}>Connect wallet</Button>
            }
            
            <a href={openSeaCollectionUrl} target="_blank" className="sm:ml-6 font-mono my-auto" rel="noreferrer">
              See on OpenSea
            </a>
          </div>
          <MinedSuccessMessage tokenId={mintedId} />
        </div>
      </div>
    </header>
  )
}

export default HomeHero

function MinedSuccessMessage({ tokenId }: { tokenId?: string }) {
  if (!tokenId) {
    return null
  }
  const fancyId = "#00000".slice(0, 6 - tokenId.length) + tokenId
  return (
    <span className="my-4">
      {`CryptoDicks token ${fancyId} mined! 🎉`}
    </span>
  )
}