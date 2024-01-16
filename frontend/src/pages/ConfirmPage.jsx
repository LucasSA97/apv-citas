import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Alert from "../components/Alert"
import clienteAxios from "../config/axios"


const ConfirmPage = () => {

  const [cuentaConfirm, setCuentaConfirm ] = useState(false)
  const [cargando, setCargando ] = useState(true)
  const [alert, setAlert] = useState({})

  const params = useParams()
  const { token } = params

  useEffect(() => {

    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${token}`
        const { data } = await clienteAxios(url)  
        setCuentaConfirm(true)
        setAlert({
          msg: data.msg
        })
      } catch (error) {       
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
      setCargando(false)
    }
    confirmarCuenta()

  }, [])


  return (
    <>
      <div>
        <h1 className="text-indigo-700  font-black text-6xl">Confirma tu Cuenta y Comienza a Administrar {''}<span className="text-black font-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      { !cargando &&
         <Alert
         alert={alert}
         />} 
         {cuentaConfirm && (
          <Link className="block text-center my-5 text-gray-600" to="/">Iniciar Sesión</Link>
         )} 
      </div>
    </>
  )
}

export default ConfirmPage