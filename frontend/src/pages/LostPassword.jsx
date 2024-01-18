import { Link } from "react-router-dom"
import { useState } from "react"
import clienteAxios from "../config/axios"
import Alert from "../components/Alert"

const LostPassword = () => {


  const [ email, setEmail ] = useState('')
  const [ alert, setAlert ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    if(email === '' ) {
      setAlert({msg: 'El email es obligatorio', error: true})
      return
    }
    try {
      const { data } = await clienteAxios.post('/veterinarios/lost-password', { email })
      setAlert({
        msg: data.msg
      })
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
            <h1 className="text-indigo-700  font-black text-6xl">Recupera tu Acceso y no pierdas {''} <span className="text-black font-black">tus Pacientes</span></h1>
        </div>
        <div>
        { msg && <Alert
         alert={alert}
         ></Alert>}
            <form 
              onSubmit={handleSubmit}>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                      Email</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="email" 
                     placeholder="Email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}/>
                </div>
                <input 
                type="submit"
                value="Recuperar Password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />

            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-600" to="/">¿Ya tienes cuenta? Inicia Sesión</Link>
                <Link className="block text-center my-5 text-gray-600" to="/register">¿No tienes cuenta? Regístrate</Link>
            </nav>
        </div>
    </>
  )
}

export default LostPassword