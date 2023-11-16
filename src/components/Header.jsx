import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = (status) => {

    const { cerrarSesion } = useAuth()

  return (
        <>
          <nav className="nav-admin py-5 px-10 text-center justify-center lg:flex lg:justify-between">
            <div>
          <h1 className=" titulo-nav hidden md:block"> Rev<span>Notes</span></h1>
            </div>
            <div className="flex flex-row space-x-6 md:space-x-8 justify-center items-center mt-2 lg:mt-0">
                <Link to="/admin" className="link-nav flex flex-row items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon nav-mobil-icon icon-tabler icon-tabler-notes" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M9 7l6 0" />
                        <path d="M9 11l6 0" />
                        <path d="M9 15l4 0" />
                    </svg>
                      <h1 className="hidden md:block">Mis Notas</h1>
                </Link>
                <Link to="/admin/perfil" className="link-nav flex flex-row items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon nav-mobil-icon icon-tabler icon-tabler-user" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <h1 className="hidden md:block">Perfil</h1>
                </Link>

                <div 
                    className="link-nav flex flex-row items-center justify-center gap-1"
                    onClick={cerrarSesion}
                >
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon nav-mobil-icon icon-tabler icon-tabler-logout-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                        <path d="M15 12h-12l3 -3" />
                        <path d="M6 15l-3 -3" />
                    </svg>
                      <a className="hidden md:block">Cerrar Sesion</a>
                </div>
            </div>
          </nav>
        </>
  )
}

export default Header