import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import Alert from '../components/Alert'

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth() 
    const [ perfil, setPerfil ] = useState({})
    const [ alert, setAlert ] = useState({})

    useEffect(() => {
      setPerfil(auth)
    
      
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = perfil

        if([ nombre, email].includes('')){
            setAlert({
                msg: 'Email y Nombre son requeridos',
                error: true
            })
            return
        }
       const result = await actualizarPerfil(perfil)
       setAlert(result)
    }

    const { msg } = alert
    

  return (
    <>
        <AdminNav></AdminNav>
        <h2 className="font-bold text-2xl text-center mt-10">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''} <span className="text-indigo-600 font-extrabold">Perfil</span> </p>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                { msg && <Alert alert={alert}/>}
                <form  onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="">Nombre:</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="nombre"
                        value={perfil.nombre || ''}
                        onChange={e => setPerfil({...perfil, [e.target.name] : e.target.value
                        })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="">Sitio Web:</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="web"
                        value={perfil.web || ''}
                        onChange={e => setPerfil({...perfil, [e.target.name] : e.target.value
                        })} />
                    </div>
                    <div className="my-3">
                        <label htmlFor="">Telefono:</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="telefono"
                        value={perfil.telefono || ''}
                        onChange={e => setPerfil({...perfil, [e.target.name] : e.target.value
                        })} />
                    </div>
                    <div className="my-3">
                        <label htmlFor="">Email:</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="email"
                        value={perfil.email || ''}
                        onChange={e => setPerfil({...perfil, [e.target.name] : e.target.value
                        })} />
                    </div>

                        <input type="submit"
                        value='Guardar Cambios'
                        className="bg-indigo-600 px-10 py-3 font-bold text-white rounded-lg w-full mt-5 cursor-pointer " />

                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil