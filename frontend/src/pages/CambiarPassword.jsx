import AdminNav from "../components/AdminNav"
import Alert from "../components/Alert"
import { useState } from "react"
import useAuth from "../hooks/useAuth"


const CambiarPassword = () => {

    const { guardarPassword } = useAuth()


    const [ alert , setAlert ] = useState({})
    const [ password, setPassword ] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()

       if(Object.values(password).some(campo => campo === '')){
        setAlert({
            msg: 'Todos los campos son obligatorios',
            error: true
        })
        return
       }
       if(password.pwd_nuevo.length < 6 ){
        setAlert({
            msg: 'El password debe tener minimo 6 caracteres',
            error: true
        })
        return
       }
     const respuesta = await guardarPassword(password)
     setAlert(respuesta)
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
                        type="password"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="pwd_actual"
                        placeholder="Escribe tu password actual"
                        onChange={e => setPassword({
                            ...password,[e.target.name] : e.target.value
                        })}
                        />

                    </div>
                    <div className="my-3">
                        <label htmlFor=""> Nuevo Password</label>
                        <input 
                        type="password"
                        className="border bg-gray-200 w-full p-2 rounded-lg mt-5"
                        name="pwd_nuevo"
                        placeholder="Escribe tu nuevo password"
                        onChange={e => setPassword({
                            ...password,[e.target.name] : e.target.value
                        })}
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