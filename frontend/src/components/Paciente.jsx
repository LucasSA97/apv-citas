import usePacientes from "../hooks/usePacientes"

const Paciente = ({ paciente }) => {

  const { setEdicion, eliminarPaciente } = usePacientes()

  const { email, nombre, fecha, propietario, sintomas, _id } = paciente

  const formatDate = (fecha) => {
    const newDate = new Date(fecha)
    return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(newDate)
  }

  return (
    <div className="mx-10 my-5 bg-slate-200 shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold my-2">Nombre: {''} <span className="font-normal normal-case">{nombre}</span></p>
      <p className="font-bold my-2">Email de Contacto: {''} <span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold my-2">Fecha de Alta: {''} <span className="font-normal normal-case">{formatDate(fecha)}</span></p>
      <p className="font-bold my-2">Propietario: {''} <span className="font-normal normal-case">{propietario}</span></p>
      <p className="font-bold my-2">Sintomas: {''} <span className="font-normal normal-case">{sintomas}</span></p>
      <div className="flex my-5 justify-between">
        <button 
          type="button" 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white"
          onClick={() => setEdicion(paciente)} 
        >Editar</button>
        <button 
          type="button" 
          className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-lg text-white"
          onClick={() => eliminarPaciente(_id)}
          >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente