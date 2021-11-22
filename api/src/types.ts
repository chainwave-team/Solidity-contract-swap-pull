/// https://docs.opensea.io/docs/metadata-standards

export type AttributesName =  "bgColor" | "dickColor" | "hat"
export type AttributesObject = { [key in AttributesName]: number }
 

interface TokenAttributes {
    trait_type: string
    value: string | number
}

interface extendedTokenAttributes extends TokenAttributes {
    display_type: "boost_number" | "boost_percentage" | "number"
    value: number
}

export type OpenSeaTokenAttributes = TokenAttributes | extendedTokenAttributes

export interface OpenSeaMetadata {
    name: string,
    description: string

    /**
     * This is the URL to the image of the item. 
     * Can be just about any type of image 
     * (including SVGs, which will be cached into PNGs by OpenSea), 
     * and can be IPFS URLs or paths. 
     * We recommend using a 350 x 350 image.
     */
    image: string

    /**
     * This is the URL that will appear below the asset's image
     * on OpenSea and will allow users to leave OpenSea 
     * and view the item on your site.
     */
    external_url?: string

    /**
     * These are the attributes for the item, 
     * which will show up on the OpenSea page for the item.
     */
    attributes: OpenSeaTokenAttributes[]
}