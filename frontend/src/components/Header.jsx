import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Header = () => {

    const { cerrarSesion } = useAuth()

  return (
    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">
            <h1 className="font-bold text-2xl text-center text-indigo-200">Administrador de Pacientes de {''} <span className="text-white font-black">Veterinaria</span></h1>

            <nav 
            className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link 
                to='/admin' 
                className="text-white text-xl font-bold hover:bg-indigo-100 rounded-lg p-2 hover:text-black"
                >Pacientes</Link>
                <Link 
                to='perfil' 
                className="text-white text-xl font-bold hover:bg-indigo-100 rounded-lg p-2 hover:text-black"
                >Perfil</Link>
                <button 
                    type="button"
                    className="text-white text-xl font-bold hover:bg-indigo-100 rounded-lg p-2 hover:text-black"
                    onClick={cerrarSesion}
                >Cerrar Sesión
                </button>
            </nav>
        </div>

    </header>
  )
}

export default Header