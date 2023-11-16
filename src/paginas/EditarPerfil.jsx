import { AdminNav } from "../components/AdminNav"
import { useState, useEffect } from "react"
import useAuth from '../hooks/useAuth'
import Alerta from '../components/Alerta'

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = perfil

        if([nombre, email].includes('')){
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return
        }

        const resultado = await actualizarPerfil(perfil)

        setAlerta(resultado)
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

                <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
                <p className="text-xl mt-3 text-center">Modifica tu Informacion aqui</p>

                <div className="flex w-full justify-center">
                    <div className="formulario-container mt-30 md:mt-5 px-8 md:px-5 rounded-xl w-96 mx-auto">

                        {msg && <Alerta alerta={alerta}/>}

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
                                    className="w-full p-3"
                                    name="nombre"
                                    value={perfil.nombre || ''}
                                    onChange={e => setPerfil({
                                        ...perfil,
                                        [e.target.name] : e.target.value
                                    })}
                                />
                            </div>
                            <div className="my-5 input-form-container flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi ml-2 icon bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                                <input 
                                    type="text"
                                    className="w-full p-3"
                                    name="email"
                                    value={perfil.email || ''}
                                    onChange={e => setPerfil({
                                        ...perfil,
                                        [e.target.name]: e.target.value
                                    })}
                                />
                            </div>

                            <button type="submit"
                                className="bg-black w-full button-submit uppercase"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </section>
            
        </>
  )
}

export default EditarPerfil