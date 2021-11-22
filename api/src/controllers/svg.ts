import { Request, Response } from 'express'

import generateSVG, { AttributesObject } from '../generateSVG'

export function getSVG(req: Request, res: Response) {
    try {
        const { bgColor, dickColor, hat } = req.params

        // Required fields
        if (
            !isNumeric(bgColor) || 
            !isNumeric(dickColor) || 
            !isNumeric(hat)
        ) {
            return res.status(500).json({ error: "Wrong properties" })
        }

        const options: AttributesObject = {
            bgColor: Number(bgColor), 
            dickColor: Number(dickColor), 
            hat: Number(hat)
        }

        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(generateSVG(options))
    }
    catch {
        res.sendStatus(404)
    }
}

// Ensure is a string numerical
function isNumeric(str: unknown): boolean {
    return typeof str === "string" && !isNaN(parseFloat(str))
}