import { CodeIcon, CollectionIcon, GlobeIcon, SettingIcon, StarIcon } from "../Icons"

export const features = [
  {
    title: "Full on-chain metadata",
    text: <p>Avoid power cheating, your can verify dicks attributes by yourself.</p>,
    icon: CollectionIcon
  },
  {
    title: "Decentralized storage",
    text: <p>Keep it immutable, immortal, unstoppable.</p>,
    icon: GlobeIcon
  },
  {
    title: "Rarity algorithm",
    text: <p>Each dick is unique and each attribute as a rarity level.</p>,
    icon: SettingIcon
  },
  {
    title: "Vectorized images",
    text: <p>Ensure high quality in all sizes.</p>,
    icon: StarIcon
  },
  {
    title: "Open-source",
    text: <p>You can read all the code from each piece of this project on <a href="https://github.com/juliencrn/CryptoDicks" target="_blank" rel="noreferrer">Github</a></p>,
    icon: CodeIcon
  }
]

const FeaturesSection = () => {
  return (
    <section className="max-w-2xl mx-auto my-10 sm:my-20 md:my-24 px-6">
      <ul>
        {features.map(feature => (
          <li key={feature.title} className="mb-6 flex">
            <div className="bg-gray-800 h-10 w-10 rounded-lg flex justify-center items-center">
              {feature.icon()}
            </div>
            <div className="flex-1 flex flex-col align-middle justify-start ml-6">
              <h3 className="text-xl sm:text-2xl leading-none sm:leading-none font-extrabold tracking-tight text-gray-50 mb-2">
                {feature.title}
              </h3>
              <div className="text-md sm:text-lg">
              {feature.text}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturesSection