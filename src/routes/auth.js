import {Router} from 'express'
import { welcome } from '../controllers/authControllers.js'
const router = Router()

router.get('/login', welcome)
router.post('/login')
router.get('/register')
router.post('/register')

export default router