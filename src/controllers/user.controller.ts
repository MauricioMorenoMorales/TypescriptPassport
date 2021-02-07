import { RequestHandler } from 'express'

export const signUp: RequestHandler = (req, res) => {
	res.send('signup')
}
export const signIn: RequestHandler = (req, res) => {
	res.send('signin')
}
