// dotenv
require('dotenv').config()
let { PORT } = process.env

// Ext modules
import express from 'express'

// Int modules
import { logger } from './utils/logger'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.listen(PORT, async () => {
    logger.info(`Running on http://localhost:${PORT}`)

    routes(app)
})