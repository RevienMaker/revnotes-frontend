import Formulario from "../components/Formulario"
import ListadoNotas from "../components/ListadoNotas"
import { useState } from "react"
import useNotas from "../hooks/useNotas"

const AdministrarNotas = () => {

	const { cerrarModal, abrirModal, btnAbrirModal, modalAbierto } = useNotas()

  return (
		<>

			{btnAbrirModal ? 
			<div 
				className="btn-nueva-nota shadow-sm hover:shadow-lg"
				onClick={abrirModal}
			>
				<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil-plus" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
					<path d="M13.5 6.5l4 4" />
					<path d="M16 19h6" />
					<path d="M19 16v6" />
				</svg>
			</div> : <></>}
		
		  	{modalAbierto ? 
				<div className="formularioModal flex flex-col justify-center items-center">
					<div className="Modal p-5 py-5 md:px-10 md:py-10">
						<Formulario/>
					</div>
				</div> : <></> 
			}


			<div>
				<ListadoNotas />
			</div>
			
		</>
  )
}


export default AdministrarNotas