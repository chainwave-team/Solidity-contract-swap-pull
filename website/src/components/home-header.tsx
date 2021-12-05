import Image from 'next/image'

import gif from "../../dicks.gif"
import Button from "./button"

interface PropTypes {
    title: string
    description: string
}

const HomeHeader = ({ title, description}: PropTypes) => {
  return (
    <header className="lg:min-h-screen px-6 max-w-6xl mx-auto flex">
        <div className="w-full m-auto lg:flex">
            <div className="w-100 lg:w-2/5 flex py-6">
                <div style={{ aspectRatio: "1/1", maxWidth: 600 }} className="relative m-auto w-full rounded-2xl overflow-hidden">
                    <Image src={gif} alt={"CryptoDicks"} layout="fill" />
                </div>
            </div>
            <div className="w-100 lg:w-3/5 lg:ml-6 mb-6 flex flex-col align-middle">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-50 mt-10 mb-8 sm:mt-14 sm:mb-10">
                    {title}
                </h1>
                <p className="text-lg sm:text-2xl sm:leading-10 font-medium mb-6">
                    {description}
                </p>

                <div className="flex flex-wrap">
                    <Button variant="primary" className="mb-6">
                        Mint your NFT
                    </Button>
                    <Button variant="secondary" className="sm:ml-6 mb-6">
                        See on OpenSea
                    </Button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HomeHeader

