import { NinjaDocument, NinjaModel } from "../models/ninja.model"

const createNinja = async (payload: NinjaDocument) => {
    const ninja = await NinjaModel.create(payload)

    return ninja.toJSON()
}

export { createNinja }