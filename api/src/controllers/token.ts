import { Request, Response } from 'express'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import { RPC_URL, SITE_URL } from '../config'
import generateSVG, { TraitName } from '../svg'
import { isNumeric, validateAttributes } from './utils'
import { uploadSVG } from '../ipfs.storage'
import CryptoDicks from '../contracts/CryptoDicks.json'

// Instantiate the web3
const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
const web3 = new Web3(web3Provider)

export async function getTokenMetadata(req: Request, res: Response) {
  try {
    if (!isNumeric(req.params.tokenId)) {
      return res.status(500).json({ message: "Token id is missing." })
    }

    // Extract metadata from the blockchain
    const tokenId = Number(req.params.tokenId)

    // Instantiate the contract
    const networkId = await web3.eth.net.getId();
    const networkData = (CryptoDicks.networks as Record<string, { address: string }>)[networkId];
    const contract = new web3.eth.Contract(
      CryptoDicks.abi as AbiItem | AbiItem[],
      networkData.address
    )

    const currentSupply = await contract.methods.currentSupply().call()
    if (tokenId > Number(currentSupply)) {
      return res.status(404).json({ message: "Token does not exist." })
    }

    // Get metadata
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
    res.status(404).json({ message: "Could not get the token." })
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