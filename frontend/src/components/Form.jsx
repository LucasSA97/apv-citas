

const Form = () => {
  return (
    <>
        <p className='text-lg text-center mb-10'>Añade tus Pacientes y {''} y <span className='text-indigo-600 font-bold'>Administralos</span> </p>

        <form 
            className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
            >
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="mascota"
                >Nombre Mascota</label>
                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="propietario"
                >Propietario</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="email"
                >Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="fecha"
                >Fecha de Alta</label>
                <input 
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>
            <div className="mb-5">
                <label 
                    className="text-gray-700 font-bold"
                    htmlFor="sintomas"
                >Síntomas</label>
                <textarea 
                    id="sintomas"
                    placeholder="Describe los Síntomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                 />
            </div>
            <input 
                type="submit"
                value='Agregar Paciente'
                className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
            />
        </form>

    </>
  )
}

export default Form