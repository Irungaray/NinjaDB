// Ext modules
import { Request, Response } from "express"
import { createNinja } from "../services/ninja.service"

// Int modules
import { logger } from "../utils/logger"

const createNinjaHandler = async ( req: Request, res: Response ) => {
    const ninja = await createNinja(req.body)

    logger.warn(`Creating ninja ${ninja.name}`)

    return res.send("Ninja created")
}

export { createNinjaHandler }
