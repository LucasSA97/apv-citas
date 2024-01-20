import { useState } from "react"
import Alert from './Alert'
import usePacientes from "../hooks/usePacientes"


const Form = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [fecha, setFecha] = useState('')

    const [alert, setAlert] = useState({})

    const { savePaciente } = usePacientes()

    const handleSubmit = e => {
        e.preventDefault()
        if([nombre, propietario, email, sintomas, fecha].includes('') ) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        setAlert({})
        savePaciente({ nombre, propietario, email, sintomas, fecha })
    }

    const { msg } = alert
  return (
    <>
        <p className='text-lg text-center mb-10'>Añade tus Pacientes y {''} y <span className='text-indigo-600 font-bold'>Administralos</span> </p>

        <form 
            className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
            onSubmit={handleSubmit}
            >
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="nombre"
                >Nombre Mascota</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="propietario"
                >Propietario</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="email"
                >Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="fecha"
                >Fecha de Alta</label>
                <input 
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="sintomas"
                >Síntomas</label>
                <textarea 
                    id="sintomas"
                    placeholder="Describe los Síntomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                 />
            </div>
            <input 
                type="submit"
                value='Agregar Paciente'
                className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
            />
        </form>

        { msg && <Alert alert={alert}/>}

    </>
  )
}

export default Form