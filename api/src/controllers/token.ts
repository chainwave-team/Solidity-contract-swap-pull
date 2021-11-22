import { Request, Response } from 'express'
import to from "await-to-js"
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import token from '../../../abis/CryptoDicksNFT.json'
import { api_base_url, contractAddress, networkUrl } from '../config'

const web3Provider = new Web3.providers.HttpProvider(networkUrl)
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(
    token.abi as AbiItem | AbiItem[],
    contractAddress
)

export async function getTokenMetadata(req: Request, res: Response) {
    // Get the token data from the blockchain
    const tokenId = req.params?.tokenId
    const [err, metadata] = await to<any, any | null>(
        contract.methods.get(tokenId).call()
    )

    if (err) {
        console.log(err?.data);
        res.status(404).json({
            error: err?.data?.reason || "Token not found"
        })
    }

    const { bgColor, dickColor, hat, clothe, skin } = metadata

    // https://docs.opensea.io/docs/metadata-standards
    res.json({
        name: `CryptoDicks #${tokenId}`,

        // description: "My first **NFT collection**.",

        /**
         * This is the URL to the image of the item. 
         * Can be just about any type of image 
         * (including SVGs, which will be cached into PNGs by OpenSea), 
         * and can be IPFS URLs or paths. 
         * We recommend using a 350 x 350 image.
         */
        image: `${api_base_url}/${tokenId}`,

        /**
         * This is the URL that will appear below the asset's image
         * on OpenSea and will allow users to leave OpenSea 
         * and view the item on your site.
         */
        // external_url: `http://localhost:8000`,

        /**
         * These are the attributes for the item, 
         * which will show up on the OpenSea page for the item.
         */
        attributes: [
            {
                "trait_type": "Background color",
                "value": bgColor
            },
            {
                "trait_type": "Dick color",
                "value": dickColor
            },
            {
                "trait_type": "Hat",
                "value": hat
            },
            {
                "trait_type": "Clothe",
                "value": clothe
            },
            {
                "trait_type": "skin",
                "value": skin
            },
            // {
            //     "display_type": "boost_number",
            //     "trait_type": "Aqua Power",
            //     "value": 40
            // },
            // {
            //     "display_type": "boost_percentage",
            //     "trait_type": "Stamina Increase",
            //     "value": 10
            // },
            // {
            //     "display_type": "number",
            //     "trait_type": "Generation",
            //     "value": 2
            // }
        ]
    })
}