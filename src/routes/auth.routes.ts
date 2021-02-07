import {Router } from 'express'
const router = Router()

import * as userController from '../controllers/user.controller'

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

export default router