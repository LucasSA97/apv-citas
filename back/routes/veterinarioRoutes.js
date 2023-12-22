import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Desde API/Veterinario')
})

export default router;