import express from 'express'
import checkAuth from '../middleware/authMiddleware.js'
import { 
    registrar, 
    perfil, 
    confirmar,
    autenticar,
    lostPassword,
    newPassword,
    comprobarToken 
    } from '../controllers/veterinarioController.js'

const router = express.Router()

//Parte publica
router.post('/', registrar)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)
router.post('/lost-password', lostPassword)
router.route('/lost-password/:token').get(comprobarToken).post(newPassword)

//Parte privada
router.get('/perfil', checkAuth, perfil)



export default router;