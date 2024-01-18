import { useState, createContext, useEffect } from "react";
import clienteAxios from "../config/axios";
const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [ auth, setAuth ] = useState({})

    useEffect(() => {
        const autenticarUser = async () => {
            const token = localStorage.getItem('token')
            if(!token) return
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
        }
        autenticarUser()
    }, [])


    return (

        <AuthContext.Provider
            value={{
                auth,
                setAuth
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