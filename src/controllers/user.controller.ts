import { RequestHandler, Response } from 'express'
import jwt from 'jsonwebtoken'
import UserModel, { IUser } from '../models/user'
import config from '../config'

function createToken(user: IUser) {
	return jwt.sign({ id: user.id, email: user.email }, config.JWTSECRET)
}

export const signUp: RequestHandler = async (req, res): Promise<Response> => {
	const { email, password } = req.body
	if (!email || !password)
		return res
			.status(400)
			.json({ message: 'Please send your email and password' })
	const user = await UserModel.findOne({ email })
	if (user)
		return res
			.status(400)
			.json({ message: 'The user already exists try creating a new one' })
	const newUser = new UserModel({ email, password })
	await newUser.save()
	return res.status(201).json({ message: 'User created' })
}

export const signIn: RequestHandler = async (req, res): Promise<Response> => {
	const { email, password } = req.body
	if (!email || !password)
		return res
			.status(400)
			.json({ message: 'Please send your email and password' })
	const user: IUser = await UserModel.findOne({ email })
	if (!user)
		return res.status(400).json({ message: 'This user does not exist' })
	const isMatch = await user.comparePassword(password)
	if (isMatch) return res.status(200).json({ token: createToken(user) })

	return res
		.status(400)
		.json({ message: 'The email or password are incorrect' })
}
