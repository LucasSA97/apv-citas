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
                className="bg-white/5 text-2xl
                border dark:border-white/10 border-gray-300
                rounded-lg text-white
                inline-flex justify-center items-center gap-x-2
                py-1 px-2 md:py-2 md:px-4
                hover:scale-110 hover:bg-white/10"
                >Pacientes</Link>
                <Link 
                to='perfil' 
                className="bg-white/5 text-2xl
                border dark:border-white/10 border-gray-300
                rounded-lg text-white
                inline-flex justify-center items-center gap-x-2
                py-1 px-2 md:py-2 md:px-4
                hover:scale-110 hover:bg-white/10"
                >Perfil</Link>
                <button 
                    type="button"
                    className="bg-white/5 text-2xl
                    border dark:border-white/10 border-gray-300
                    rounded-lg text-white
                    inline-flex justify-center items-center gap-x-2
                    py-1 px-2 md:py-2 md:px-4
                    hover:scale-110 hover:bg-white/10"
                    onClick={cerrarSesion}
                >Cerrar Sesión
                </button>
            </nav>
        </div>

    </header>
  )
}

export default Header