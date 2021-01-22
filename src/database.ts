import mongoose from 'mongoose'
import config from './config'
import chalk from 'chalk'

console.log(chalk.inverse.red(config.USERNAME))

mongoose.connect(
	`mongodb+srv://${config.USERNAME}:${config.PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config.DBNAME}?retryWrites=true&w=majority`,
)

const connection = mongoose.connection

connection.once('open', () => {
	console.log('Mongodb connection stablished')
})

connection.on('error', err => {
	console.log(`Error in database ${err}`)
})
