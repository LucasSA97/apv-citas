
const Login = () => {
  return (
    <>
         <div>
            <h1 className="text-indigo-700  font-black text-6xl">Inicia Sesión y Administra tus <span className="text-black font-black">Pacientes</span></h1>
        </div>

        <div>
            <form action="">
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                    className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                    type="email" 
                    placeholder="Email de Registro"  />
                </div>
                <div className="my-5">
                    <label 
                    className="uppercase text-grey-600 block text-xl font-bold">
                        Password</label>
                    <input
                     className="border w-full p-3 mt-3 bg-green-200 rounded-lg" 
                     type="password" 
                     placeholder="Password"/>
                </div>
                <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto " />

            </form>
         </div>
       
    </>
  )
}

export default Login