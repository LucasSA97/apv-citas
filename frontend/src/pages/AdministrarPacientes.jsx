import { useState } from "react"
import ListPacientes from "../components/ListPacientes"
import Form from "../components/Form"

const AdministrarPacientes = () => {

  const [ mostrarForm, setMostrarForm ] = useState(false)
  return (
    <div className="flex flex-col md:flex-row">
      <button 
        type="button"
        className="bg-indigo-600 text-white font-bold mx-10 p-3 rounded-md mb-10 hover:bg-indigo-800 cursor-pointer transition-colors md:hidden"
        onClick={() => setMostrarForm(!mostrarForm)}
        >
        { mostrarForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      <div className={`${mostrarForm ? 'block' : 'hidden'  } md:block md:w-1/2 lg:w-2/5`}>
        <Form/>
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <ListPacientes/>
      </div>
    </div>
  )
}

export default AdministrarPacientes