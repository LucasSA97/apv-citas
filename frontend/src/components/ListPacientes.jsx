import usePacientes from "../hooks/usePacientes"

const ListPacientes = () => {

    const { pacientes } = usePacientes()

  return (
    <>
     { pacientes.lenght ? (
        <>
            <h2 className="text-3xl text-center font-semibold">Listado Pacientes</h2>
            <p className="text-xl text-center mt-5 mb-10 ">Administra Tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
        </>
     ) : 
     (
        <>
            <h2 className="text-3xl text-center font-semibold">No hay Pacientes</h2>
            <p className="text-xl text-center mt-5 mb-10 ">Comienza Agregando Pacientes {''}
            <span className="text-indigo-600 font-bold">y estarán acá</span>
            </p>
        </>
     )}
    </>
  )
}

export default ListPacientes