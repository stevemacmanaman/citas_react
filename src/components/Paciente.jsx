


const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {


  const { nombre, propietario, email, fecha, sintomas,id } = paciente

  const handleEliminar = ()=>{
        const respuesta = confirm("Estas seguro de Eliminar")

        if(respuesta){
          eliminarPaciente(id)
        }
  }

  return (
    <div className="bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-xl">
      <p className="uppercase  mb-3 font-bold text-gray-700">Nombre: {""}
      </p>
      <span className="font-normal normal-case">{nombre}</span>

      <p className="uppercase  mb-3 font-bold text-gray-700">Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="uppercase  mb-3 font-bold text-gray-700">email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="uppercase  mb-3 font-bold text-gray-700">Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="uppercase  mb-3 font-bold text-gray-700">sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="px-8 py-3 text-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="px-8 py-3 text-bold text-white bg-red-600 rounded-lg hover:bg-red-700 uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>

      </div>
      </div>
  )
}

export default Paciente
