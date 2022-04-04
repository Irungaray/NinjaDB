// Ext modules
import mongoose from 'mongoose'

interface NinjaDocument extends mongoose.Document {
    name: string,
    rank: string,
    available: boolean,
    createdAt: Date
}

const NinjaSchema = new mongoose.Schema<NinjaDocument>({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    }
    // Add geolocation model
}, {
    timestamps: true
})

const NinjaModel = mongoose.model<NinjaDocument>('ninja', NinjaSchema)

export { NinjaDocument, NinjaModel }
