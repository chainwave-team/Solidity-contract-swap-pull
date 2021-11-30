require("dotenv/config")
const Web3 = require('web3')
const token = require("../abis/CryptoDicks.json")

const networkUrl = `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_TOKEN}`

const web3Provider = new Web3.providers.HttpProvider(networkUrl)
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(
    token.abi,
    process.env.CONTRACT_ADDRESS
)

// console.log(networkUrl, contract);


async function exec() {
    try {
        const newBaseURI = "https://cryptodicks-api.herokuapp.com"
        const x = await contract.methods.setBaseURI(newBaseURI).call({
            from: process.env.OWNER_WALLET
        })
        console.log(x);
    } catch (error) {
        console.log(error);
    }
}


exec()