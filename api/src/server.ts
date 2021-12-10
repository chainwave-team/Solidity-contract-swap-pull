import express from 'express'
import cors from 'cors'

import { API_URL, PORT } from './config'
import { getStats } from './controllers/stats'
import { getSVG } from './controllers/svg'
import { getTokenMetadata } from './controllers/token'
import { getTrait } from './controllers/trait'

const app = express()

app.use(cors())

// Returns OpenSea NFT Properties
app.get('/token/:tokenId', getTokenMetadata)

// Returns an SVG image
app.get('/svg/:id/:background/:skin/:hat/:eye/:mouse/:clothe/:arm/:special', getSVG)

// Return an part of svg to show an attribute in the frontend
app.get('/svg-trait/:trait/:value', getTrait)

// Returns some statistics about the collection
app.get('/stats', getStats)

// Start
app.listen(PORT, () => {
  console.log(`App listening at ${API_URL} 🎉`)
})
