import Paciente from '../models/Paciente.js'

export const agregarPaciente = ( req, res ) =>{
const paciente = new Paciente( req.body )
 
try {
    
} catch (error) {
    console.log(error)
}
}
export const obtenerPacientes = ( req, res ) =>{

}