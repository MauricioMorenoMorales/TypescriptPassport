import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes'

//initializations
const app = express()

//settings
app.set('port', process.env.PORT || 4444)

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.get('/', (req, res) => {
	res.send(`The api is running at port ${app.get('port')}`)
})

app.use(authRoutes)

export default app
