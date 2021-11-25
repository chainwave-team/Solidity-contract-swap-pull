import { Request, Response } from 'express'

import { skins } from '../svg/layers/skins'
import { eyes } from '../svg/layers/eyes'
import { hats } from '../svg/layers/hats'
import { backgrounds } from '../svg/layers/backgrounds'

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
            dickColors: skins.length,
            hats: hats.length,
            eyes: eyes.length,
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