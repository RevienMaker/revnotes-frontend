import { useState } from "react"
import { Link } from "react-router-dom"
import NavLogin from "../components/NavLogin"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"

const Registrar = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({ msg: 'Todos los campos son obligatorios', error: true })
            console.log('todos los campos son obligatorios')

            return;
        }

        if(password !== repetirPassword){
            setAlerta({ msg: 'los password no son iguales', error: true })
            return;
        }

        if(password.length < 6 ){
            setAlerta({ msg: 'El password es muy corto, agrega minimo 6 caracteres', error: true })
            
            return;
        }

        setAlerta({})

        // Crear el usuario en la api
        try {
            await clienteAxios.post(`/usuarios`, {nombre, email, password})
            setAlerta({ msg: 'Creado Correctamente, revisa tu email', error: false })
        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true })
        }
    }

    const { msg } = alerta

    return (
        <>

            <NavLogin />

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

            <main className="container flex justify-center justify-items-center flex-col mx-auto">

                    <div className="text-center m-5">
                        <h1 className="titulo-registro">Crea una Cuenta</h1>
                    </div>

                <div className=" formulario-container mt-2 px-8 md:px-5 rounded-xl w-96 mx-auto ">

                    { msg && <Alerta
                        alerta={alerta}
                    />}

                    <form
                        className="w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="my-5 input-form-container flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Tu Nombre"
                                className="w-full p-3"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="my-5 input-form-container flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <input
                                type="email"
                                placeholder="Email de Registro"
                                className="w-full p-3"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5 input-form-container flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-person-lock" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                            </svg>
                            <input
                                type="password"
                                placeholder="Tu Password"
                                className="w-full p-3"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="my-5 input-form-container flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-person-lock" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                            </svg>
                            <input
                                type="password"
                                placeholder="Repite tu Password"
                                className="w-full p-3"
                                value={repetirPassword}
                                onChange={e => setRepetirPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit"
                            className="bg-black w-full button-submit uppercase"
                        >Crear Cuenta</button>
                    </form>

                    <div className="">
                        <Link to="/"
                            className="block text-start my-5"
                        >
                            <h1 className="links">Ya tengo una Cuenta</h1>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Registrar