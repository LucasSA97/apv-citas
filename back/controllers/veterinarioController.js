import Veterinario from "../models/Veterinario.js"

const registrar = async (req, res) => {
    const { email, password, nombre } = req.body

    //Prevenir usuario replicado
    const existeUsuario = await Veterinario.findOne({ email })
    if( existeUsuario ) {
        const error = new Error('Email ya en uso')
        return res.status(400).json({ msg: error.message })
    }
    try {

    //Guardaremos un veterinario con los metodos new y save(sirve para guardar un objeto en la db) de mongoose
    const veterinario = new Veterinario(req.body)
    const veterinarioAlmacenado = await veterinario.save()

    res.json(veterinarioAlmacenado)
    } catch (error) {
        console.log(error)
    }

}

const perfil = (req, res) => {
    res.json({ msg: 'Mostrando perfil'})
}

const confirmar = (req, res) => {
    //Cuando leemos datos de la url usamos req.params y luego .token o .usuario o la palabra que elegimos en la route en este caso /:token
    console.log(req.params.token)

    res.json({ msg: 'Confirmar perfil'})
}

export {
    registrar, 
    perfil,
    confirmar
}