require("dotenv/config")
const Web3 = require('web3')
const token = require("../abis/Rinkeby-abi.json")

const NODE_ENV = process.env.NODE_ENV || "development"
const isDev = NODE_ENV === "development"

export const RPC_URL = isDev
    ? "http://localhost:8545"
    : `https://${process.env.NETWORK}.infura.io/v3/${process.env.INFURA_TOKEN}`

const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(
    token,
    process.env.CONTRACT_ADDRESS
)

// console.log(networkUrl, contract);


async function setBaseURI() {
    try {
        const newBaseURI = "https://cryptodicks-api.herokuapp.com/updated/"
        const x = await contract.methods.setBaseURI(newBaseURI).call({
            from: process.env.OWNER_WALLET,
        })
        console.log(x);
    } catch (error) {
        console.log(error);
    }
}

async function get(id) {
    try {
        const x = await contract.methods.get(id).call()
        console.log(x);
    } catch (error) {
        console.log(error);
    }
}

async function log() {
    try {
        const x = await contract.methods.get(id).call()
        console.log(x);
    } catch (error) {
        console.log(error);
    }
}

async function claim() {
    try {
        const x = await contract.methods.claim().call({
            from: process.env.OWNER_WALLET,
            // gas: 5000000,
            value: web3.utils.toWei('0.01', 'ether')
        })
        console.log(x);
    } catch (error) {
        console.log(error);
    }
}

// setBaseURI()
// get(5)
claim()