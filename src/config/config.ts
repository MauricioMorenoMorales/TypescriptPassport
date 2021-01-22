import path from 'path'
import dotenv from 'dotenv'
dotenv.config({
	path: path.resolve(__dirname, '../../.env'),
})

export default {
	DB: {
		USER: process.env.MONGODB_USER || 'db_user_otro',
		PASSWORD: process.env.MONGODB_PASSWORD || '12345',
		DBNAME: process.env.MONGODB_DBNAME || 'typescriptPassport',
	},
}
