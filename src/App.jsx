import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtegida from './layout/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import AdministrarNotas from './paginas/AdministrarNotas'
import EditarPerfil from './paginas/EditarPerfil'
import CambiarPassword from './paginas/CambiarPassword'

import { AuthProvider } from './context/AuthProvider'
import { NotasProvider } from './context/NotasProvider'

function App() {

  return (
    <BrowserRouter>
		<AuthProvider>
			<NotasProvider>
				<Routes>
					<Route path='/' element={<AuthLayout />}>
						<Route index element={<Login />} />
						<Route path='registrar' element={<Registrar />} />
						<Route path='olvide-password' element={<OlvidePassword />} />
						<Route path='olvide-password/:token' element={<NuevoPassword />} />
						<Route path='confirmar/:id' element={<ConfirmarCuenta />} />
					</Route>

					<Route path='/admin' element={<RutaProtegida />}>
						<Route index element={<AdministrarNotas />} />
						<Route path='perfil' element={<EditarPerfil />} />
						<Route path='cambiar-password' element={<CambiarPassword />} />
					</Route>
				</Routes>
			</NotasProvider>
		</AuthProvider>
    </BrowserRouter>
  )
}

export default App
