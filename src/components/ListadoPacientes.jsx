import Paciente from "./Paciente"


Paciente

const ListadoPacientes = ({ Pacientes,setPaciente,eliminarPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">

      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>




          {Pacientes.map(paciente => (


            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />


          ))}
        </>
      ) : (
          <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agragando Pacientes {""}
            <span className="text-indigo-600 font-bold ">
              Y Apareceran en este lugar
            </span>
          </p>
          
          </>

      )}



    </div>
  )
}

export default ListadoPacientes
