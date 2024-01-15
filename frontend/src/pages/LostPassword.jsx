import { Link } from "react-router-dom"
const LostPassword = () => {
  return (
    <>
        <div>
            <h1 className="text-indigo-700  font-black text-6xl">Recupera tu Acceso y no pierdas {''} <span className="text-black font-black">tus Pacientes</span></h1>
        </div>
        <div>
            <form >
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                      Email</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="email" 
                     placeholder="Email"/>
                </div>
                <input 
                type="submit"
                value="Recuperar Password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />

            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-600" to="/">¿Ya tienes cuenta? Inicia Sesión</Link>
                <Link className="block text-center my-5 text-gray-600" to="/lost-password">¿No tienes cuenta? Regístrate</Link>
            </nav>
        </div>
    </>
  )
}

export default LostPassword