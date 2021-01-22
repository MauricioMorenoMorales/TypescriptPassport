import path from 'path'
import dotenv from 'dotenv'
dotenv.config({
	path: path.resolve(__dirname, '../.env'),
})

export default {
	DB: {
		USER: process.env.MONGODB_USER,
		PASSWORD: process.env.MONGODB_PASSWORD,
		DBNAME: process.env.MONGODB_DBNAME,
	},
}
