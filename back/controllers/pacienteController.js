import Paciente from '../models/Paciente.js'

export const agregarPaciente = ( req, res ) =>{
    

    const paciente = new Paciente( req.body )
    console.log(paciente)
}
export const obtenerPacientes = ( req, res ) =>{

}