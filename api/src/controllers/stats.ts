import { Request, Response } from 'express'

import { backgrounds, dickColors } from '../svg/colors'
import { hats } from '../svg/layers/hats'

export function getStats(req: Request, res: Response) {
    const quantities = {
        target: 10_000,
        // TODO: Dynamist this value without copy/paste frontend #DRY
        current: 448,
    }
    const calcProgress = quantities.current * 100 / quantities.target
    const progress = `${calcProgress.toFixed(2)}%`

    res.json({
        quantities: {...quantities, progress },
        metadata: {
            backgroundColors: backgrounds.length,
            dickColors: dickColors.length,
            hats: hats.length,
        },
        // See svg/types
        specialEffects: [
            "dick waves skin", 
            "bg stars", 
            "Prepuce", 
            "pink balls", 
            "Balls hair",
        ]
    })
}