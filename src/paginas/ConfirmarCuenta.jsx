import { useEffect, useState } from "react"
import NavLogin from "../components/NavLogin"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"

const ConfirmarCuenta = () => {

    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState({})

    const params = useParams()
    const { id } = params

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/usuarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true)
                setAlerta({
                    msg: data.msg,
                    error: false
                })
                console.log(data)
            } catch (error) {
                setAlerta({msg: error.response.data.msg, error: true})
            }

            setCargando(false)
        }
        confirmarCuenta();
    }, [])

    return (
        <>
            <NavLogin />

            <main className="container flex justify-center justify-items-center flex-col mx-auto">

                <div className="text-center m-5">
                    <h1 className="text-3xl font-black">Confirma tu Cuenta</h1>
                </div>

                <div className=" mt-20 md:mt-5 px-5 py-2 rounded-xl w-96 mx-auto ">
                    {!cargando && <Alerta alerta={alerta}/>}

                    {cuentaConfirmada && (
                        <Link
                            to="/"
                            className="font-black block text-center my-5">Iniciar Sesion</Link>
                    ) }
                </div>
            </main>
        </>
    )
}

export default ConfirmarCuenta