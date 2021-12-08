import Image from 'next/image'

import gif from "../../dicks.gif"
import { openSeaCollectionUrl } from '../config'
import useWeb3 from '../hooks/useWeb3'
import Button, { LinkButton } from "./button"

interface PropTypes {
    title: string
    description: string
}

function HomeHero({ title, description}: PropTypes) {
  const { active, connect, mint } = useWeb3()

  return (
    <header className="lg:min-h-screen lg:-mt-20 px-6 max-w-6xl mx-auto flex">
      <div className="w-full m-auto lg:flex">
        <div className="w-100 lg:w-1/2 flex py-6">
          <div style={{ aspectRatio: "1/1", maxWidth: 600 }} className="relative m-auto w-full rounded-2xl overflow-hidden opacity-5">
            <Image src={gif} alt={"CryptoDicks"} layout="fill" />
          </div>
        </div>
        <div className="w-100 lg:w-1/2 lg:ml-6 mb-6 flex flex-col align-middle">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-50 mt-10 mb-8 sm:mt-14 sm:mb-10">
            {title}
          </h1>
          <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6 	">
            {description}
          </p>

          <div className="flex flex-wrap mt-6">
            {active 
              ? <Button variant="primary" className="mb-6" onClick={mint}>Mint your NFT</Button>
              : <Button variant="primary" className="mb-6" onClick={connect}>Connect wallet</Button>
            }
            <LinkButton href={openSeaCollectionUrl} target="_blank" variant="secondary" className="sm:ml-6 mb-6">
              See on OpenSea
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHero
