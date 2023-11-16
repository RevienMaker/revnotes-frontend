import useNotas from "../hooks/useNotas"

const Nota = ({nota}) => {
    
    const { cerrarModal, abrirModal, btnAbrirModal, modalAbierto, setEdicion, eliminarNota } = useNotas()

    const { titulo, contenido, fecha, _id } = nota

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(nuevaFecha)
    }
    

  return (
        <div 
            className="nota-container w-10/12 md:w-3/6 shadow-md hover:shadow-2xl rounded-lg"
        >
            <div 
                className="nota"
                onClick={() => setEdicion(nota)}
            >
                <p className="titulo-nota text-center lg:text-start font-black m-auto lg:ml-7 lg:pl-20">
                    {titulo}
                </p>
                
                <p className="contenido-nota p-5 lg:pl-10 my-3">
                    {
                        contenido.length < 70 ? 
                            (
                                contenido
                            ) 
                            : 
                            (
                                contenido.substring(0, 70) + '...'
                            )
                    }
                </p>
            </div>

            <div className="flex flex-row gap-3 px-10 mt-10 justify-between items-center my-5">
                <p className="fecha-nota mr-5 text-sm lg:block">
                    {formatearFecha(fecha)}
                </p>
                <div 
                    className="eliminar-nota-btn flex items-center justify-center"
                    onClick={() => eliminarNota(_id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-x" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7h16" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      <path d="M10 12l4 4m0 -4l-4 4" />
                  </svg>
                </div>
            </div>
            
        </div>
  )
}

export default Nota