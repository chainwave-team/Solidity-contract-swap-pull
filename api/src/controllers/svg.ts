import { Request, Response } from 'express'
import { optimize } from "svgo"

import generateSVG from '../svg'
import { isNumeric, validateAttributes } from './utils'

export function getSVG(req: Request, res: Response) {
  try {
    if (!isNumeric(req.params.id)) {
      throw new Error("Id is missing");
    }

    const attributes = validateAttributes(req.params)

    // Generate and optimize the SVG
    const svgString = generateSVG({
      id: Number(req.params.id),
      ...attributes
    })
    const result = optimize(svgString)

    // Return the SVG file
    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(result.data)
  }
  catch {
    res.sendStatus(404)
  }
}
