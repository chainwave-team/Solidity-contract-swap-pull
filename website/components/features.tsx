import Image from 'next/image'

import { features } from "../config"

const Features = () => {
    return (
        <section className="max-w-2xl mx-auto my-10 sm:my-20 md:my-24 px-6">
            <ul>
                {features.map(feature => (
                    <li key={feature.title} className="mb-6 flex">
                        <div 
                            style={{ aspectRatio: "1/1" }} 
                            className="relative w-16 h-16 rounded-full overflow-hidden"
                        >
                            <Image src={feature.image} alt={"Random CryptoDicks"} layout="fill" />
                        </div>
                        <div className="flex-1 flex flex-col align-middle justify-center ml-6">
                            <h3 className="text-xl leading-none font-extrabold tracking-tight text-gray-50 mb-1">
                                {feature.title}
                            </h3>
                            <p>
                                {feature.text}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Features