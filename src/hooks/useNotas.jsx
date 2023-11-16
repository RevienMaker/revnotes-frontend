import { useContext } from "react";
import NotasContext from '../context/NotasProvider'

const useNotas = () => {
    return useContext(NotasContext)
}

export default useNotas;