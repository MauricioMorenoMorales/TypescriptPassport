import mongoose, { ConnectionOptions } from 'mongoose'
import config from './config'
import chalk from 'chalk'

const dbOptions: ConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

mongoose.connect(
	`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config.DBNAME}?retryWrites=true&w=majority`,
	dbOptions,
)

const connection = mongoose.connection

connection.once('open', () => {
	console.log('Mongodb connection stablished')
})

connection.on('error', err => {
	console.log(`Error in database ${err}`)
	process.exit(0)
})
