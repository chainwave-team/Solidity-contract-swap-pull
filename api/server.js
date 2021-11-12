require('dotenv').config()

const express = require('express')
const Web3 = require('web3')
// const path = require('path')

const token = require('../abis/CryptoDicks.json')
const generateSVG = require('./svg')

const app = express()

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || "http://localhost:3000";
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || 3000;
// const infuraToken = process.env.INFURA_TOKEN;
// const network = process.env.NETWORK || "rinkeby";

// Connect to the contract using 3
const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(token.abi, CONTRACT_ADDRESS)

// console.log(contract);

// Returns OpenSea NFT Properties
app.get('/token/:tokenId', async (req, res) => {
    try {
        // Get the token data from the blockchain
        const tokenId = req.params?.tokenId
        const { id, color, text } = await contract.methods.get(tokenId).call()

        res.json({
            name: "Collectible",
            description: "My first **NFT collection**.",
            image: `http://localhost:3000=${id}`,
            // external_url: `http://localhost:8000`,
            attributes: [
                {
                    "trait_type": "Base",
                    "value": "Starfish"
                },
                {
                    "trait_type": "Eyes",
                    "value": "Big"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Surprised"
                },
                {
                    "trait_type": "Level",
                    "value": 5
                },
                {
                    "trait_type": "Stamina",
                    "value": 1.4
                },
                {
                    "trait_type": "Personality",
                    "value": "Sad"
                },
                {
                    "display_type": "boost_number",
                    "trait_type": "Aqua Power",
                    "value": 40
                },
                {
                    "display_type": "boost_percentage",
                    "trait_type": "Stamina Increase",
                    "value": 10
                },
                {
                    "display_type": "number",
                    "trait_type": "Generation",
                    "value": 2
                }
            ]
        })
    } catch (error) {
        console.log(error.data);
        res.status(404).json({
            error: error.data?.reason || "Token not found"
        })
    }
})

// Returns am SVG image
app.get('/svg', (req, res) => {
    try {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(generateSVG())
    }
    catch {
        res.sendStatus(404)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at ${BASE_URI} 🎉`)
})
