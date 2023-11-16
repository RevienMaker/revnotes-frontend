import useNotas from "../hooks/useNotas"
import Nota from "./Nota"

const ListadoNotas = () => {

  const { notas } = useNotas()

  return (
		<>
			{ notas.length ? 
				(
					<>
					  	<h2 className="font-black text-3xl text-center">Mis Notas</h2>

						<div className="flex  flex-col justify-center items-center">
							{notas.map(nota => (
								<Nota
									key={nota._id}
									nota={nota}
								/>
							))}
						</div>
					</>
				) 
				: 
				(
					<>
					  	<h3 className="font-black mt-14 text-2xl text-center">No hay notas</h3>
					  	<h2 className="font-normal p-5 mb-24 text-3xl text-center">Tus notas aparecerán aquí <br /> ...</h2>
					</>
				)
			}
		</>
  )
}

export default ListadoNotas