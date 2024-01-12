import Paciente from '../models/Paciente.js'

export const agregarPaciente = async ( req, res ) =>{
const paciente = new Paciente( req.body )
 paciente.veterinario = req.veterinario._id
try {
    const pacienteAlmacenado = await paciente.save()
    res.json(pacienteAlmacenado)
} catch (error) {
    console.log(error)
}
}
export const obtenerPacientes = ( req, res ) =>{

}