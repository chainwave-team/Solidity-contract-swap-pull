require('dotenv').config()

import express from 'express'
import path from 'path'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils';

import token from '../../abis/CryptoDicksNFT.json'
import generateSVG from './generateSVG';
import { AttributesObject, OpenSeaMetadata } from './types';

const app = express()

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || "http://localhost:3000";
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";
// const infuraToken = process.env.INFURA_TOKEN;
// const network = process.env.NETWORK || "rinkeby";

// Connect to the contract using 3
const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(token.abi as AbiItem | AbiItem[], CONTRACT_ADDRESS)

// console.log(contract);

// Serve static files
app.use(express.static(path.resolve('api', 'public')))

// Returns OpenSea NFT Properties
app.get('/token/:tokenId', async (req, res) => {
    try {
        // Get the token data from the blockchain
        const tokenId = req.params?.tokenId
        const { bgColor, dickColor, hat, clothe, skin } = await contract.methods.get(tokenId).call()

        const metadata: OpenSeaMetadata = {
            name: "CryptoDicks",
            description: "My first **NFT collection**.",
            image: `http://localhost:3000=${tokenId}`,
            // external_url: `http://localhost:8000`,
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
        }

        res.json(metadata)
    } catch (error: any) {
        console.log(error?.data);
        res.status(404).json({
            error: error?.data?.reason || "Token not found"
        })
    }
})

// Returns am SVG image
app.get('/svg/:bgColor/:dickColor/:hat/:clothe/:skin', (req, res) => {
    try {
        const { bgColor, dickColor, hat, clothe, skin } = req.params

        // Required fields
        if (
            !isNumeric(bgColor) || 
            !isNumeric(dickColor) || 
            !isNumeric(hat)|| 
            !isNumeric(clothe)|| 
            !isNumeric(skin)
        ) {
            return res.status(500).json({ error: "Wrong properties" })
        }

        const options: AttributesObject = {
            bgColor: Number(bgColor), 
            dickColor: Number(dickColor), 
            hat: Number(hat),
            clothe: Number(clothe), 
            skin: Number(skin)
        }

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(generateSVG(options))
    }
    catch {
        res.sendStatus(404)
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('api', 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`App listening at ${BASE_URI} 🎉`)
})

// Ensure is a string numerical
function isNumeric(str: unknown): boolean {
    return typeof str === "string" && !isNaN(parseFloat(str))
}