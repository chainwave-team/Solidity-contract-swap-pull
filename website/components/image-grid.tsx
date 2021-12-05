import Image from 'next/image'
import cn from "classnames"

import { getRandomImages } from '../api/getRandomImages'

interface PropTypes {
  disableTopMargin?: boolean
}

const ImageGrid = ({ disableTopMargin }: PropTypes) => {
  const randomImages = getRandomImages(16)
  return (
    <section className={cn(
        "flex flex-wrap", 
        disableTopMargin 
          ? "mb-16 sm:mb-24 md:mb-36"
          : "my-16 sm:my-24 md:my-36"
      )}>
        {randomImages.map(url => (
            <div 
              key={url} 
              style={{ aspectRatio: "1/1", width: `calc(100%/8)` }} 
              className="relative"
            >
                <Image src={url} alt={"Random CryptoDicks"} layout="fill" />
            </div>
        ))}
    </section>
  )
}

export default ImageGrid