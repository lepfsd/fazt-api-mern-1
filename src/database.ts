

import mongoose from "mongoose"
import config from './config'


mongoose.connect(`mongodb://localhost:27017/${config.MONGO_DATABASE}`)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Mongodb connection stablished')
})

connection.on('error', err => {
    console.log(err)
    process.exit(0)
})



