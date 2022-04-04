import { NinjaDocument, NinjaModel } from "../models/ninja.model"

const getNinjas = async () => {
    const ninjas = await NinjaModel.find({})

    return ninjas
}

const createNinja = async (payload: NinjaDocument) => {
    const ninja = await NinjaModel.create(payload)

    return ninja
}

export { getNinjas, createNinja }