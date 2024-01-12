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

export const obtenerPacientes = async ( req, res ) =>{
    const pacientes = await Paciente.find()
        .where('veterinario')
        .equals(req.veterinario)

    res.json(pacientes)
}
export const obtenerPaciente = async ( req, res ) =>{
    const { id } = req.params
    const paciente = await Paciente.findById(id)

    if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){
         return res.json({msg: 'Accion no valida'})
    }

    if(paciente){
        res.json(paciente)
    }
}

export const actualizarPaciente = async ( req, res ) =>{

}

export const eliminarPaciente = async ( req, res ) =>{

}