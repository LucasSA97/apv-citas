import { useState, createContext, useEffect } from "react";
import clienteAxios from '../config/axios'
import useAuth from "../hooks/useAuth";

const PacientesContext = createContext()

// eslint-disable-next-line react/prop-types
export const PacientesProvider = ({children}) => {

    const [ pacientes, setPacientes ] = useState([])
    const [ paciente, setPaciente ] = useState({})
    const { auth } = useAuth()

    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            const { data } = await clienteAxios('/pacientes', config)
            setPacientes(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerPacientes()
    }, [auth])

    const savePaciente = async (paciente) => {

        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if( paciente.id ) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config)
                 const pacienteActualizado = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState)
                 setPacientes(pacienteActualizado)
            } catch (error) {
               console.log(error) 
            }
        } else {
            try {

                const { data } = await clienteAxios.post('/pacientes', paciente, config)
                // eslint-disable-next-line no-unused-vars
                const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data
                setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        } 

    }

    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }

    const eliminarPaciente = async (id) => {
        const confirmar = confirm('¿Estas seguro que quieres Eliminar?')
        if(confirmar) {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                // eslint-disable-next-line no-unused-vars
                const { data } = await clienteAxios.delete(`/pacientes/${id}`, config)
                const pacientesActualizado = pacientes.filter( pacienteState => pacienteState._id !== id)
                setPacientes(pacientesActualizado)

            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <PacientesContext.Provider value={{
            pacientes,
            savePaciente,
            setEdicion,
            paciente,
            eliminarPaciente
        }}>
            {children}
        </PacientesContext.Provider>
    )

}

export default PacientesContext;

