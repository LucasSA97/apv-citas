import express  from "express";

const app = express()

app.use('/', (req, res) => {
     
})

app.listen(4000, () => {
    console.log('Servidor funcionando')
})