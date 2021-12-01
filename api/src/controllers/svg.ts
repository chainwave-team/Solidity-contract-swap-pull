import { Request, Response } from 'express'

import generateSVG, { AttributesObject } from '../svg'
import { isNumeric } from './utils'

export function getSVG(req: Request, res: Response) {
    try {
        const { id, background, skin, hat, eye, mouse, clothe, arm, special } = req.params

        // Required fields
        if (
            !isNumeric(background) ||
            !isNumeric(skin) ||
            !isNumeric(hat) ||
            !isNumeric(eye) ||
            !isNumeric(mouse) ||
            !isNumeric(clothe) ||
            !isNumeric(arm) ||
            !isNumeric(special)
        ) {
            return res.status(500).json({ error: "Wrong properties" })
        }

        const options: AttributesObject = {
            id: Number(id), 
            background: Number(background), 
            skin: Number(skin), 
            hat: Number(hat),
            eye: Number(eye),
            mouse: Number(mouse),
            clothe: Number(clothe),
            arm: Number(arm),
            special: Number(special),
        }

        console.log(options);
        

        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(generateSVG(options))
    }
    catch {
        res.sendStatus(404)
    }
}