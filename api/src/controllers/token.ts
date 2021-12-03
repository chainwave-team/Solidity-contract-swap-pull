import { Request, Response } from 'express'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import token from '../../../abis/CryptoDicks.json'
import { API_URL, CONTRACT_ADDRESS, RPC_URL, SITE_URL } from '../config'

const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
const web3 = new Web3(web3Provider)

const contract = new web3.eth.Contract(
    token.abi as AbiItem | AbiItem[],
    CONTRACT_ADDRESS
)

export async function getTokenMetadata(req: Request, res: Response) {
    // Get the token data from the blockchain
    const tokenId = req.params?.tokenId

    try {
        const metadata = await contract.methods.get(Number(tokenId)).call()

        const { background, skin, hat, eye, mouse, clothe, arm, special } = metadata

        const pathname = `/${background}/${skin}/${hat}/${eye}/${mouse}/${clothe}/${arm}/${special}`

        const attributes = [
            ["Background color", background],
            ["Dick skin", skin],
            ["Hat", hat],
            ["Eyes", eye],
            ["Mouse", mouse],
            ["Clothe", clothe],
            ["Arms", arm],
            ["Special", special],
        ]
            .filter(([, value]) => !!value)
            .map(([trait_type, value]) => ({ trait_type, value }))

    // https://docs.opensea.io/docs/metadata-standards
    res.json({
        name: `CryptoDicks #${tokenId}`,
        image: `${API_URL}/svg/${tokenId}${pathname}`,
        external_url: SITE_URL,
        attributes
    })
        
    } catch (error: any) {
        console.log(error?.data);
        res.status(404).json({
            error: error?.data?.reason || "Token not found"
        })
    }
  
    

    
}