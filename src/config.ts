import dotenv from 'dotenv'
dotenv.config()

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'mern-fazt'
}