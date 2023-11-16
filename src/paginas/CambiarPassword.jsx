import { useState } from "react"
import { AdminNav } from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

	const { guardarPassword } = useAuth()

	const [alerta, setAlerta] = useState({})
	const [password, setPassword] = useState({
		pwd_actual: '',
		pwd_nuevo: ''
	})

	const handleSubmit = async (e) => {
		e.preventDefault()

		if(Object.values(password).some(campo => campo === '')){
			setAlerta({
				msg: 'Todos los campos son obligatorios',
				error: true
			})

			return
		}

		if(password.pwd_nuevo.length < 6){
			setAlerta({
				msg: 'El Password debe tener minimo 6 caracteres',
				error: true
			})

			return
		}

		const respuesta = await guardarPassword(password)

		setAlerta(respuesta)
	}

	const { msg } = alerta

  return (
        <>
		  <section className="fondo-registro">
			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-1 icon-tabler icon-tabler-clipboard-text" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
				  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
				  <path d="M9 12h6" />
				  <path d="M9 16h6" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler fondo-icon icon-2 icon-tabler-ballpen" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M14 6l7 7l-4 4" />
				  <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
				  <path d="M4 20l1.768 -1.768" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-3 icon-tabler icon-tabler-user-pentagon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0z" />
				  <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
				  <path d="M6 20.703v-.703a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.707" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-4 icon-tabler icon-tabler-album" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				  <path d="M12 4v7l2 -2l2 2v-7" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-5 icon-tabler icon-tabler-books" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				  <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				  <path d="M5 8h4" />
				  <path d="M9 16h4" />
				  <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
				  <path d="M14 9l4 -1" />
				  <path d="M16 16l3.923 -.98" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-6 icon-tabler icon-tabler-note" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M13 20l7 -7" />
				  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
			  </svg>

			  <svg xmlns="http://www.w3.org/2000/svg" className="icon fondo-icon icon-7 icon-tabler icon-tabler-notebook" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
				  <path d="M13 8l2 0" />
				  <path d="M13 12l2 0" />
			  </svg>
		  </section>
		  	<section className="container flex flex-col justify-center items-center">
				<AdminNav />

				<h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>

				<div className="flex w-full justify-center">
				  <div className="formulario-container mt-30 md:mt-5 px-8 md:px-5 rounded-xl w-96 mx-auto ">

						{msg && <Alerta alerta={alerta} />}

						<form
							className="w-full"
							onSubmit={handleSubmit}
						>
						  	<div className="my-5 input-form-container flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-person-lock" viewBox="0 0 16 16">
									<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
								</svg>
								<input
									type="password"
								  	className="w-full p-3"
									name="pwd_actual"
									placeholder="Escribe tu password actual"
									onChange={e => setPassword({
										...password,
										[e.target.name] : e.target.value
									})}
								/>
							</div>
						 	<div className="my-5 input-form-container flex items-center gap-2">
							  	<svg xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-password-user" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M12 17v4" />
									<path d="M10 20l4 -2" />
									<path d="M10 18l4 2" />
									<path d="M5 17v4" />
									<path d="M3 20l4 -2" />
									<path d="M3 18l4 2" />
									<path d="M19 17v4" />
									<path d="M17 20l4 -2" />
									<path d="M17 18l4 2" />
									<path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
									<path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
								</svg>
								<input
									type="password"
								  	className="w-full p-3"
									name="pwd_nuevo"
									placeholder="Escribe tu nuevo password"
									onChange={e => setPassword({
										...password,
										[e.target.name]: e.target.value
									})}
								/>
							</div>

							<button type="submit"
								className="bg-black w-full button-submit uppercase"
						  	>Actualizar Password</button>
						</form>
					</div>
				</div>
			</section>
        </>
  )
}

export default CambiarPassword