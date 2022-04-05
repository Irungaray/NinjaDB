// Ext modules
import { Request, Response } from "express"
import { getNinjas, createNinja, updateNinja, deleteNinja } from "../services/ninja.service"

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

    return res.send(`Ninja ${ninja.name} created`)
}

const updateNinjaHandler = async (req: Request, res: Response) => {
    const ninja = await updateNinja(req.params.id, req.body)

    logger.warn(`Updating ninja ${ninja?.name}`)

    return res.send(`Ninja ${ninja?.name} updated`)
}

const deleteNinjaHandler = async (req: Request, res: Response) => {
    const ninja = await deleteNinja(req.params.id)

    logger.warn(`Deleting ninja ${ninja?.name}`)

    return res.send(`Ninja ${ninja?.name} deleted`)
}

export { getNinjasHandler, createNinjaHandler, updateNinjaHandler, deleteNinjaHandler }
