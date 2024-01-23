import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js"
import generarId from "../helpers/generarId.js"
import emailRegistro from "../helpers/emailRegistro.js"
import emailOlvidePassword from "../helpers/emailOlvidePassword.js"

const registrar = async (req, res) => {
    const { email, nombre } = req.body

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

    //Enviar el email
    emailRegistro({
        email,
        nombre,
        token: veterinarioAlmacenado.token
    })

    res.json(veterinarioAlmacenado)
    } catch (error) {
        console.log(error)
    }

}

const perfil = (req, res) => {
    const { veterinario } = req
    res.json(veterinario)
}

const confirmar = async (req, res) => {
    //Cuando leemos datos de la url usamos req.params y luego .token o .usuario o la palabra que elegimos en la route en este caso /:token
    const { token } = req.params
    const userConfirm = await Veterinario.findOne( { token } )

    if(!userConfirm) {
        const error = new Error('Token no valido')
        console.log(error)
        return res.status(404).json({ msg: error.message})
    }
    try {
        userConfirm.token = null;
        userConfirm.confirmado = true
        await userConfirm.save()
        res.json({ msg: "Usuario confirmado correctamente"})

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
    if(!user.confirmado){
        const error = new Error('Confirma tu cuenta')
        return res.status(403).json({ msg: error.message})
    }

    //Revisar el password
    if( await user.comprobarPassword(password)) {
    //Autenticar al usuario con json web token
    res.json({
        _id: user._id,
        nombre: user.nombre,
        email: user.email,
        token: generarJWT(user.id),

    })
    } else {
        const error = new Error('Password incorrecto')
        return res.status(403).json({ msg: error.message})
    }
}

const lostPassword = async (req, res ) => {
    const { email } = req.body
    const existeVeterinario = await Veterinario.findOne({email})
    if(!existeVeterinario){
        const error = new Error ('El usuario no existe')
        return res.status(400).json({msg: error.message})
    }

    try {
        existeVeterinario.token = generarId()
        await existeVeterinario.save()

        //Enviar Email con instrucciones
        emailOlvidePassword({
            email,
            nombre: existeVeterinario.nombre,
            token: existeVeterinario.token
        })
        res.json({msg: "Hemos enviado un email con las instrucciones"})
    } catch (error) {
        console.log(error)
    }
}

const comprobarToken = async (req, res ) => {
    const { token } = req.params
    const tokenValido = await Veterinario.findOne({ token })
    if(tokenValido){
        //Si el token es valido el usuario existe
        res.json({ msg: 'Token valido y el usuario existe '})
    } else {
        const error = new Error('Token no valido')
        return res.status(400).json({msg: error.message})
    }
}
const newPassword = async (req, res ) => {
    //params es lo que viene en la url, body es lo que escribe la persona en el formulario
    const { token } = req.params
    const { password } = req.body

    const veterinario = await Veterinario.findOne({token})
    if(!veterinario){
        const error = new Error('Hubo un error')
        return res.status(400).json({msg: error.message})
    }

    try {
        veterinario.token = null
        veterinario.password = password
        await veterinario.save()
        res.json({ msg: 'Password modificado correctamente '})
        console.log('Password modificado correctamente ')
    } catch (error) {
        console.log(error)
    }

}

const actualizarPerfil = async (req, res ) => {
    const veterinario = await Veterinario.findById(req.params.id)
    if(!veterinario) {
        const error = new Error('Hubo un error')
        return res.status(400).json({msg: error.message})
    }
    const { email } = req.body
    if(veterinario. email !== req.body.email) {
        const existeEmail = await Veterinario.findOne({email})
        if(existeEmail){
            const error = new Error('El email ya está en uso')
            return res.status(400).json({msg: error.message})
        }
    }
    try {
        veterinario.nombre = req.body.nombre 
        veterinario.email = req.body.email 
        veterinario.web = req.body.web 
        veterinario.telefono = req.body.telefono  

        const veterinarioActualizado = await veterinario.save()
        res.json(veterinarioActualizado)

    } catch (error) {
       console.log(error) 
    }
}

const actualizarPassword = async (req, res ) => {
    //Leer los datos 
    const { id } = req.veterinario;
    const { pwd_actual, pwd_nuevo } = req.body

    //Comprobar que el veterinario existe
    const veterinario = await Veterinario.findById(id)
        if(!veterinario) {
         const error = new Error('Hubo un error')
            return res.status(400).json({msg: error.message})
        }
    //Comprobar su password
    if( await veterinario.comprobarPassword(pwd_actual)){
        //Almacenar el nuevo password
       veterinario.password = pwd_nuevo
       await veterinario.save()
       res.json({msg: 'Password Almacenado Correctamente'})
    } else {
        const error = new Error('El password actual es incorrecto')
        return res.status(400).json({msg: error.message})
    }
}

export {
    registrar, 
    perfil,
    confirmar,
    autenticar,
    lostPassword,
    comprobarToken,
    newPassword,
    actualizarPerfil,
    actualizarPassword
}