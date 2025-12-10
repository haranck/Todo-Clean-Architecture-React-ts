import mongoose from "mongoose";
import {envConfig} from './envConfig'

export const connectMongo = async () :Promise<void> => {
    await mongoose.connect(envConfig.mongoUri)
    console.log("MongoDB connected")
}

