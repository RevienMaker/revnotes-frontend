import { Link } from "react-router-dom"

const NavLogin = () => {
  return (
    <>
          <nav className="py-5 px-10 text-center justify-center lg:flex lg:justify-between ">
            <div>
				  <h1 className="titulo-nav hidden md:block">Rev<span>Notes</span></h1>
            </div>
              <div className="flex flex-row space-x-6 text-center justify-center items-center">
                <Link to="/registrar">
                    <h1 className=" link-nav">Registrarse</h1>
                </Link>
                <Link to="/">
                    <h1 className=" link-nav">Iniciar Sesion</h1>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default NavLogin