

const Paciente = ({ paciente }) => {

  const { email, nombre, fecha, propietario, sintomas, _id } = paciente

  return (
    <div className="mx-10 my-5 bg-slate-200 shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold">Nombre: {''} <span className="font-normal normal-case">{nombre}</span></p>
      <p className="font-bold">Email: {''} <span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold">Fecha: {''} <span className="font-normal normal-case">{fecha}</span></p>
      <p className="font-bold">Propietario: {''} <span className="font-normal normal-case">{propietario}</span></p>
      <p className="font-bold">Sintomas: {''} <span className="font-normal normal-case">{sintomas}</span></p>
    </div>
  )
}

export default Paciente