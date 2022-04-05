// Ext modules
import { FilterQuery, UpdateQuery } from "mongoose"

// Int modules
import { NinjaDocument, NinjaModel } from "../models/ninja.model"

const getNinjas = async () => {
    const ninjas = await NinjaModel.find({})

    return ninjas
}

const createNinja = async (payload: NinjaDocument) => {
    const ninja = await NinjaModel.create(payload)

    return ninja
}

const updateNinja = async (query: String, update: UpdateQuery<NinjaDocument>) => {
    const ninja = await NinjaModel.findByIdAndUpdate(query, update)

    return ninja
}

const deleteNinja = async (query: FilterQuery<NinjaDocument>) => {
    const ninja = await NinjaModel.findByIdAndDelete(query)

    return ninja
}

export { getNinjas, createNinja, updateNinja, deleteNinja }