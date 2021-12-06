import { Request, Response } from 'express'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import rinkeby from '../contract-abis/abi.rinkeby.json'
import development from '../contract-abis/abi.development.json'
import { CONTRACT_ADDRESS, RPC_URL, SITE_URL, isDev } from '../config'
import generateSVG, { TraitName } from '../svg'
import { isNumeric, validateAttributes } from './utils'
import { uploadSVG } from '../ipfs.storage'

const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
const web3 = new Web3(web3Provider)

const abi = isDev ? development : rinkeby

const contract = new web3.eth.Contract(
  abi as AbiItem | AbiItem[],
  CONTRACT_ADDRESS
)

export async function getTokenMetadata(req: Request, res: Response) {
  try {
    if (!isNumeric(req.params.tokenId)) {
      throw new Error("Token id is missing");
    }

    // Extract metadata from the blockchain
    const tokenId = Number(req.params.tokenId)
    const metadata = await contract.methods.get(tokenId).call()
    const attributes = validateAttributes(metadata)

    // Generate the SVG string and upload it
    const svgString = generateSVG({ id: tokenId, ...attributes })
    const imageUrl = await uploadSVG(svgString, `cryptoDicks-${tokenId}.svg`)

    // https://docs.opensea.io/docs/metadata-standards
    res.json({
      name: `CryptoDicks #${tokenId}`,
      image: imageUrl,
      external_url: SITE_URL,
      attributes: formatAttributes(attributes)
    })
  } catch (error) {
    console.log(error);
    res.status(404)
  }
}

type OpenSeaAttribute = { trait_type: string; value: number }

function formatAttributes(attributes: Record<TraitName, number>): OpenSeaAttribute[] {
  const mapTitleToAttributes: [string, number][] = [
    ["Background color", attributes.background],
    ["Dick skin", attributes.skin],
    ["Hat", attributes.hat],
    ["Eyes", attributes.eye],
    ["Mouse", attributes.mouse],
    ["Clothe", attributes.clothe],
    ["Arms", attributes.arm],
    ["Special", attributes.special],
  ]
  return mapTitleToAttributes
    .filter(([, value]) => !!value)
    .map(([trait_type, value]) => ({ trait_type, value }))
}