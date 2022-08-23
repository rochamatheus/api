 import {Router} from 'express'
 import UserController from './controllers/UserController'



 const router = Router()
 
 
router.get('/user', UserController.index)
router.get('/user/:id', UserController.findById)

export default router