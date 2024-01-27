import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
 
import connectDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";


const app = express()
app.use(express.json())

dotenv.config()

connectDB()

const dominioPermitidos = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: dominioPermitidos
};

// Enable cors
app.use(
    cors({
      origin: '*',
    }),
  );
// const corsOptions = {
//     origin: function (origin, callback) {
//         if(dominioPermitidos.indexOf(origin) !== -1) {
//             //El origen del request esta permitido
//             callback(null, true)
//         } else {
//             callback(new Error('No esta permitido por CORS'))
//         }
//     }
// }

// app.use(cors(corsOptions))


app.use('/api/veterinarios', veterinarioRoutes)
app.use('/api/pacientes', pacienteRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en ${PORT}`)
})