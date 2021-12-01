import { Request, Response } from 'express'

import { generateTraitSVG, TraitName } from '../svg'
import { isNumeric } from './utils'

export function getTrait(req: Request, res: Response) {
    try {
        const { trait, value } = req.params

        const allTraits: TraitName[] = ["background", "skin", "hat", "eye", "mouse", "clothe", "arm", "special"]
        if (!allTraits.includes(trait as TraitName)) {
            return res.status(500).json({ error: "Trait not found" })
        }

        if (!isNumeric(value)) {
            return res.status(500).json({ error: "Bad value" })
        }

        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(generateTraitSVG(trait as TraitName, Number(value)))
    }
    catch {
        res.sendStatus(404)
    }
}

