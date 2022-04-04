// Ext modules
import { Request, Response } from "express"
import { getNinjas, createNinja } from "../services/ninja.service"

// Int modules
import { logger } from "../utils/logger"

const getNinjasHandler = async (req: Request, res: Response) => {
    const ninjas = await getNinjas()

    logger.info(`Retrieving ninjas`)

    return res.send(ninjas)
}

const createNinjaHandler = async (req: Request, res: Response) => {
    const ninja = await createNinja(req.body)

    logger.warn(`Creating ninja ${ninja.name}`)

    return res.send("Ninja created")
}

export { getNinjasHandler, createNinjaHandler }
