import { Link } from "react-router-dom"

export const AdminNav = () => {
  return (
        <>
            <nav className="admin-nav flex flex-col md:flex-row gap-3 mb-5">
                <Link 
                    to='/admin/perfil'
                    className="link-nav flex justify-center items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-cog" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M19.001 15.5v1.5" />
                        <path d="M19.001 21v1.5" />
                        <path d="M22.032 17.25l-1.299 .75" />
                        <path d="M17.27 20l-1.3 .75" />
                        <path d="M15.97 17.25l1.3 .75" />
                        <path d="M20.733 20l1.3 .75" />
                    </svg>
                    <p>Perfil</p>
                </Link>
                <Link 
                    to='/admin/cambiar-password'
                    className="link-nav flex gap-1 justify-center items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-password-user" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#101820" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                    <p>Cambiar Password</p>
                </Link>
            </nav>
        </>
  )
}
