import AdminNav from "../components/AdminNav"


const CambiarPassword = () => {
  return (
    <>
    <AdminNav></AdminNav>
        <h2 className="font-bold text-2xl text-center mt-10">Cambiar Contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''} <span className="text-indigo-600 font-extrabold">Contraseña</span> </p>
    </>
  )
}

export default CambiarPassword