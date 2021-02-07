import { Router, Request, Response } from 'express'
const router = Router()
import passport from 'passport'

router.get(
	'/special',
	passport.authenticate('jwt', { session: false }),
	(req: Request, res: Response) => {
		res.send('success')
	},
)

export default router
