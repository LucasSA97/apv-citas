import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js"

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
    const { veterinario } = req
    res.json({ perfil: veterinario })
}

const confirmar = async (req, res) => {
    //Cuando leemos datos de la url usamos req.params y luego .token o .usuario o la palabra que elegimos en la route en este caso /:token
    const { token } = req.params
    const userConfirm = await Veterinario.findOne( { token } )

    if(!userConfirm) {
        const error = new Error('Token no valido')
        return res.status(404).json({ msg: error.message})
    }
    try {
        userConfirm.token = null;
        userConfirm.confirmado = true
        await userConfirm.save()
        res.json({ msg: 'Usuario confirmado correctamente'})

    } catch (error) {
      console.log(error)  
    }
}

const autenticar = async (req, res ) => {
    const { email, password } = req.body

    //Comprobar si existe
    const user = await Veterinario.findOne({email})
    if(!user) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ msg: error.message})
    }

    //Comprobar si está confirmado
    if(user.confirmado){
        const error = new Error('Confirma tu cuenta')
        return res.status(403).json({ msg: error.message})
    }

    //Revisar el password
    if( await user.comprobarPassword(password)) {
    //Autenticar al usuario con json web token
    res.json({token: generarJWT(user.id)})
    } else {
        const error = new Error('Password incorrecto')
        return res.status(403).json({ msg: error.message})
    }
}

const lostPassword = (req, res ) => {

}
const comprobarToken = (req, res ) => {

}
const newPassword = (req, res ) => {

}

export {
    registrar, 
    perfil,
    confirmar,
    autenticar,
    lostPassword,
    comprobarToken,
    newPassword
}