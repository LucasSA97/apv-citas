import AdminNav from "../components/AdminNav"
import Alert from "../components/Alert"
import { useState } from "react"


const CambiarPassword = () => {

    const [ alert , setAlert ] = useState({})

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
        <h2 className="font-bold text-2xl text-center mt-10">Cambiar Contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''} <span className="text-indigo-600 font-extrabold">Contraseña</span> </p>
        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                { msg && <Alert alert={alert}/>}
                <form  onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="">Password Actual</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="nombre"
                        placeholder="Escribe tu password actual"
                        />

                    </div>
                    <div className="my-3">
                        <label htmlFor=""> Nuevo Password</label>
                        <input 
                        type="text"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="nombre"
                        placeholder="Escribe tu nuevo password"
                        />

                    </div>

                        <input type="submit"
                        value='Actualizar Password'
                        className="bg-indigo-600 px-10 py-3 font-bold text-white rounded-lg w-full mt-5 cursor-pointer " 
                        
                        />


                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword