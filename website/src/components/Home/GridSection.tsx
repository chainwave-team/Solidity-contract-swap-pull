import Image from 'next/image'
import cn from "classnames"

interface PropTypes {
  images: string[]
  disableTopMargin?: boolean
}

const GridSection = ({ disableTopMargin, images }: PropTypes) => {
  return (
    <section 
      className={cn(
        "flex flex-wrap", 
        disableTopMargin 
          ? "mb-16 sm:mb-24 md:mb-36"
          : "my-16 sm:my-24 md:my-36"
      )}
    >
      {images.map(url => (
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

export default GridSection