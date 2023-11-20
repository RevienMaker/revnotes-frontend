import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import useNotas from "../hooks/useNotas"

const Formulario = () => {

	const [titulo, setTitulo] = useState('')
	const [contenido, setContenido] = useState('')
	const [fecha, setFecha] = useState('')
	const [id, setId] = useState(null)

	const [reiniciaModal, setReiniciarModal] = useState(false)

	const [alerta, setAlerta] = useState({})

	const { cerrarModal, abrirModal, btnAbrirModal, modalAbierto, setModalAierto } = useNotas()

	const { guardarNota, nota } = useNotas()

	
	useEffect(() => {
		if(nota?.titulo) {
			setTitulo(nota.titulo)
			setContenido(nota.contenido)
			setFecha(nota.fecha)
			setId(nota._id)
		}
	}, [nota])

	const formularioBtnSubmit = () => {
		let resultado;
		if (!id && [titulo, contenido].includes('')) {
			resultado = 'Cerrar'
		} else {
			resultado = 'Crear Nota'
		}
		if (id) {
			resultado = 'Guardar Cambios'
		}

		return resultado;
	}

	let resultadoTexto = formularioBtnSubmit()


	const handleSubmit = (e) => {
		e.preventDefault();

		if(resultadoTexto !== 'Cerrar' && [titulo, contenido, fecha].includes('')) {
			setAlerta({
				msg: 'Debes llenar los campos',
				error: true
			})
			return;
		}

		if (resultadoTexto !== 'Cerrar'){
			guardarNota({titulo, contenido, fecha, id})
			setAlerta({})
		}

		setTitulo('')
		setContenido('')
		setFecha('')
		setId('')

		cerrarModal()

	}

	const {msg} = alerta;

  return (
		<>
			<form className="w-full"
				onSubmit={handleSubmit}
			>
				<div className=" flex flex-col gap-3">

					<input 
						type="text"
						id="titulo"
						placeholder="Titulo"
						className="w-full input p-3 mt-2"
						value={titulo}
						onChange={(e) => {
							setTitulo(e.target.value)
							formularioBtnSubmit()
						}}
					/>

					<textarea 
						id="contenido" 
						placeholder="Escribe aqui" 
						className="mt-2 input-nota w-full p-3"
						value={contenido}
						onChange={(e) => {
							formularioBtnSubmit()
							setContenido(e.target.value)
						}}
					></textarea>

				  	<input 
						type="date" 
						id="fecha" 
						className="mt-2 h-auto input-fecha p-1"
						placeholder="Fecha"
						value={fecha}
						onChange={(e) => {
							formularioBtnSubmit()
							setFecha(e.target.value)
						}}
					/>

				  	<div className="w-full flex flex-row justify-end gap-3 items-center">
					  	{msg && 
							<Alerta 
								alerta={alerta}
								className="w-2/4"
							/>
						}
						<button type="submit"
						  className={`mx-1 md:mx-9 button-submit-formulario flex justify-center items-center ${resultadoTexto !== 'Cerrar' ? 'btn-listo' : 'btn-cerrar'} ` }
						>{resultadoTexto !== 'Cerrar' ? 
							  (
								
								<>
									<h2 className="mx-1 uppercase font-black text-lg">Hecho</h2>
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 12l5 5l10 -10" />
									</svg>
								</>
							  )
							  :
							  (
								<>
									<h2 className="mx-1 uppercase font-black text-lg">Cerrar</h2>
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M18 6l-12 12" />
										<path d="M6 6l12 12" />
									</svg>
								</>
							  )
						}</button>
					</div>
				</div>
			</form>
		</>
  )
}

export default Formulario