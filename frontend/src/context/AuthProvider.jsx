import { useState, createContext, useEffect } from "react";
import clienteAxios from "../config/axios";
import Alert from "../components/Alert";
const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [cargando, setCargando ] = useState(true)
    const [ auth, setAuth ] = useState({})
    const [ alert, setAlert ] = useState({})

    useEffect(() => {
        const autenticarUser = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
            setCargando(false)
            return }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await clienteAxios('/veterinarios/perfil', config )
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})
            }
            setCargando(false)
        }
        autenticarUser()
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil =async datos => {
        const token = localStorage.getItem('token')
        if(!token) {
        setCargando(false)
        return 
         }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url = `/veterinarios/perfil/${datos._id}`
            const { data } = await clienteAxios.put( url, datos, config )
            
            return {
                msg: 'Almacenado correctamente'
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const guardarPassword = async (datos) => {
        
    }


    return (

        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}
            >
            {children}
        </AuthContext.Provider>
    )
}



export {
    AuthProvider
}

export default AuthContext