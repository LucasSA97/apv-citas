import AdminNav from "../components/AdminNav"

const EditarPerfil = () => {
  return (
    <>
        <AdminNav></AdminNav>
        <h2 className="font-bold text-2xl text-center mt-10">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''} <span className="text-indigo-600 font-extrabold">Perfil</span> </p>
    </>
  )
}

export default EditarPerfil