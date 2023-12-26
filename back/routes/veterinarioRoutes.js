import express from 'express'
import checkAuth from '../middleware/authMiddleware.js'
import { 
    registrar, 
    perfil, 
    confirmar,
    autenticar, 
    } from '../controllers/veterinarioController.js'

const router = express.Router()

router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)

router.get('/perfil', checkAuth, perfil)



export default router;