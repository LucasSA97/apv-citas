import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-700  font-black text-6xl">Crea tu Cuenta y Administra {''}<span className="text-black font-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form action="">
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Nombre
                    </label>
                    <input 
                    className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                    type="text" 
                    placeholder="Nombre"  />
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Email</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="email" 
                     placeholder="Email"/>
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Password</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="password" 
                     placeholder="Password"/>
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                       Repetir Password</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="password" 
                     placeholder="Repite tu Password"/>
                </div>
                <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />

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