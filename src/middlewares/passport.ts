import { StrategyOptions, ExtractJwt, Strategy } from 'passport-jwt'
import config from '../config'
import UserModel from '../models/user'

const options: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.JWTSECRET,
}

export default new Strategy(options, async (payload, done) => {
	try {
		const user = await UserModel.findById(payload.id)
		if (user) return done(null, user)
		return done(null, false)
	} catch (err) {
		console.error(err)
	}
})
