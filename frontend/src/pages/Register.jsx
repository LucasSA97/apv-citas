import { Link } from "react-router-dom"
import { useState } from "react"
const Register = () => {

  const [nombre, setNombre ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [repetirPassword, setRepetirPassword ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if([nombre, email, password, repetirPassword].includes('')){
      console.log('hay campos vacios')
      return
    }
    if(password !== repetirPassword){
      console.log('Los passwords no son iguales')
      return
    }
    if( password.length < 8){
      console.log('Son pocos caracteres')
    }
  }

  return (
    <>
      <div>
        <h1 className="text-indigo-700  font-black text-6xl">Crea tu Cuenta y Administra {''}<span className="text-black font-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form 
              onSubmit={handleSubmit}
              >
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Nombre
                    </label>
                    <input 
                    className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                    type="text" 
                    placeholder="Nombre"
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Email</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="email" 
                     placeholder="Email"
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
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                       Repetir Password</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="password" 
                     placeholder="Repite tu Password"
                     value={repetirPassword} 
                    onChange={e => setRepetirPassword(e.target.value)}
                     />
                </div>

                <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " 
                />

            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-600" to="/">¿Ya tienes cuenta? Inicia Sesión</Link>
                <Link className="block text-center my-5 text-gray-600" to="/lost-password">Olvide mi Password</Link>
            </nav>

         </div>
    </>
  )
}

export default Register