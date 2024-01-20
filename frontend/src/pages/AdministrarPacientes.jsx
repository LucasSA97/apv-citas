
import ListPacientes from "../components/ListPacientes"
import Form from "../components/Form"

const AdministrarPacientes = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 lg:w-2/5">
        <Form/>
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <ListPacientes/>
      </div>
    </div>
  )
}

export default AdministrarPacientes