import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import Alert from '../components/Alert'
import clienteAxios from '../config/axios'
import useAuth from "../hooks/useAuth"

const Login = () => {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ alert, setAlert ] = useState({})

    const { setAuth } = useAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if([email, password].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/login', { email, password })
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin')
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
            <h1 className="text-indigo-700  font-black text-6xl">Inicia Sesión y Administra tus {''} <span className="text-black font-black">Pacientes</span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {   msg && 
            <Alert
         alert={alert}
         />}
            <form
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                    className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                    type="email" 
                    placeholder="Email de Registro"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Password</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="password" 
                     placeholder="Password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     />
                </div>
                <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />

            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-600" to="/register">¿No tienes cuenta? Regístrate</Link>
                <Link className="block text-center my-5 text-gray-600" to="/lost-password">Olvide mi Password</Link>
            </nav>
         </div>
       
    </>
  )
}

export default Login