import { Web3Storage, File } from "web3.storage"
import { optimize } from "svgo"

import { WEB3_STORAGE_TOKEN } from "./config"

export async function uploadSVG(svgString: string, filename: string): Promise<string> {
    if (!WEB3_STORAGE_TOKEN) {
        throw new Error("A token is needed. You can create one on https://web3.storage");
    }
    
    try {
        const storage = new Web3Storage({ token: WEB3_STORAGE_TOKEN })
        const file = new File([optimize(svgString).data], filename)
        const cid = await storage.put([file])
        return `ipfs://${cid}/${filename}`
    } catch (error) {
        throw new Error("Error while uploading file on web3.storage");
    }
}