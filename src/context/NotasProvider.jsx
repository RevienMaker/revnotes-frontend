import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const NotasContext = createContext()

export const NotasProvider = ({children}) => {

    const [notas, setNotas] = useState([])
    const [nota, setNota] = useState({})

    const { auth } = useAuth()

    const [modalAbierto, setModalAierto] = useState(false)
    const [btnAbrirModal, setBtnAbrirModal] = useState(true)

    const cerrarModal = () => {
        setModalAierto(false)
        setBtnAbrirModal(true)
    }
    const abrirModal = () => {
        setBtnAbrirModal(false)
        setModalAierto(true)
    }

    useEffect(() => {
        const obtenerNotas = async () => {

            try {
                const token = localStorage.getItem('RevNotes-token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/notas', config)
                setNotas(data)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerNotas()
    }, [auth])

    
    const guardarNota = async (nota) => {

        const token = localStorage.getItem('RevNotes-token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if(nota.id){
            try {
                const { data } = await clienteAxios.put(`/notas/${nota.id}`, nota, config)

                const notasActualizadas = notas.map( notaState => notaState._id === data._id ? data : notaState )

                setNota(notasActualizadas)
                setNotas(notasActualizadas)

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await clienteAxios.post('/notas', nota, config)

                const { createdAt, updatedAt, __v, ...notaAlmacenada } = data

                setNotas([notaAlmacenada, ...notas])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
    }

    const setEdicion = (nota) => {
        setNota(nota)
        abrirModal()
    }

    const eliminarNota = async (id) => {
        console.log(id)
        const confirmar = confirm('Quieres eliminar esta Nota?')

        if(confirmar){
            try {
                const token = localStorage.getItem('RevNotes-token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios.delete(`/notas/${id}`, config )

                const notasActualizadas = notas.filter( notasState => notasState._id !== id)

                setNotas(notasActualizadas)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <NotasContext.Provider
            value={{
                notas,
                nota,
                guardarNota,
                modalAbierto,
                btnAbrirModal,
                cerrarModal,
                setModalAierto,
                abrirModal,
                setEdicion,
                eliminarNota,
            }}
        >
            {children}
        </NotasContext.Provider>
    )
}

export default NotasContext;