import express from 'express'
import path from 'path'

import { api_base_url, port } from './config'
import { getStats } from './controllers/stats'
import { getSVG } from './controllers/svg'
import { getTokenMetadata } from './controllers/token'
import { getTrait } from './controllers/trait'

const app = express()

// Serve static files
app.use(express.static(path.resolve('api', 'public')))

// Returns OpenSea NFT Properties
app.get('/token/:tokenId', getTokenMetadata)

// Returns an SVG image
app.get('/svg/:id/:background/:skin/:hat/:eye/:mouse/:clothe/:arm/:special', getSVG)

// Return an part of svg to show an attribute in the frontend
app.get('/svg-trait/:trait/:value', getTrait)

// Returns some statistics about the collection
app.get('/stats', getStats)

// Frontend
app.get('/', (req, res) => {
    res.sendFile(path.resolve('api', 'public', 'index.html'))
})

// Start
app.listen(port, () => {
    console.log(`App listening at ${api_base_url} 🎉`)
})
