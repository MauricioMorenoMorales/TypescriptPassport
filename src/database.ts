import mongoose from 'mongoose'
import config from './config/config'
import chalk from 'chalk'

mongoose.connect(
	`mongodb+srv://${config.DB.USER}:${config.DB.PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config.DB.DBNAME}?retryWrites=true&w=majority`,
)

const connection = mongoose.connection

connection.once('open', () => {
	console.log('Mongodb connection stablished')
})

connection.on('error', err => {
	console.log(`Error in database ${err}`)
})
