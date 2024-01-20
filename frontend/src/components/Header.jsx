import { Link } from "react-router-dom"


const Header = () => {
  return (
    <head className="py-10 bg-indigo-600">
        <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">
            <h1 className="font-bold text-2xl text-center text-indigo-200">Administrador de Pacientes de {''} <span className="text-white font-black">Veterinaria</span></h1>

            <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to='/admin' className="text-white text-xl font-bold">Pacientes</Link>
                <Link to='/admin' className="text-white text-xl">Perfil</Link>
                <button 
                    type="button"
                    className="text-white text-xl font-bold"
                >Cerrar Sesión
                </button>
            </nav>
        </div>

    </head>
  )
}

export default Header