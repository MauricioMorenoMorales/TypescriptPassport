import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const config = {
	PORT: process.env.PORT || 4444,
	USERNAME: process.env.DBUSERNAME || 'Usuario Inexistente',
	PASSWORD: process.env.PASSWORD || ' contraseña inexistente',
	DBNAME: process.env.DBNAME || 'nombre de base de datos inexistente',
	JWTSECRET: process.env.JWTSECRET || 'ajsonwebtokenssecret',
}

export default config
