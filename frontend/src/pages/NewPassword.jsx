import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Alert from "../components/Alert"
import clienteAxios from "../config/axios"

const NewPassword = () => {

const params = useParams()
const { token } = params

const [password, setPassword] = useState('')
const [passwordModificado, setPasswordModificado] = useState(false)
const [ alert , setAlert] = useState({})
const [tokenValido, setTokenValido ] = useState(false)

useEffect(() => {
  const comprobarToken = async () => {
    try {
        await clienteAxios(`/veterinarios/lost-password/${token}`)
        setAlert({
            msg: 'Coloca tu Nuevo Password'
        })
        setTokenValido(true)
    } catch (error) {
        setAlert({
            msg: 'Hubo un error con el enlace',
            error: true
        })
    }
  }
  comprobarToken()
}, [])

const handleSubmit = async (e) => {
    e.preventDefaut()
    if(password.length < 6) {
        setAlert({
            msg: 'El Password debe tener minimo 6 caracteres',
            error: true
        })
        return
    }
    try {
        const url = `/veterinarios/lost-password/${token}`
        const { data } = await clienteAxios.post(url, { password })
        setAlert({
            msg: data.msg
        })
        setPasswordModificado(true)
    } catch (error) {
        setAlert({
            msg: error.response.data.msg,
            error: true
        })
    }
}

const { msg } = alert
  return (
    <>
     <div>
        <h1 className="text-indigo-700  font-black text-6xl"> Restablece tu password y no Pierdas Acceso a {''}<span className="text-black font-black"> tus Pacientes</span>
        </h1>
     </div>
     <div className="mt-20 md:mt-5 shadow-lg px-5 py-10         rounded-xl bg-white">
     { msg && <Alert
         alert={alert}
         ></Alert>}
         {
            tokenValido && 
            (
                <>
                <form 
                onSubmit={handleSubmit}>
                <div className="my-5">
                    <label 
                        className="uppercase text-grey-600 block text-xl font-bold">
                            Nuevo Password    
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                        type="password" 
                        placeholder="Nuevo Password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                    <input 
                        type="submit"
                        value="Guardar Nuevo Password"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " 
                    />
                </form>

          
            </>
            )
         }
         {
            passwordModificado &&       <Link className="block text-center my-5 text-gray-600" to="/">Iniciar Sesión
            </Link>
         }

     </div>
    </>
  )
}

export default NewPassword