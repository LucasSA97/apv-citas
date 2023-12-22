import express  from "express";
import dotenv from 'dotenv';
 
import connectDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";


const app = express()

dotenv.config()

connectDB()


app.use('/api/veterinarios', veterinarioRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en ${PORT}`)
})