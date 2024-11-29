import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Inicio } from './routes/Inicio/Inicio'
import { Nosotros } from './routes/Nosotros/Nosotros'
import { Pedidos } from './routes/Pedidos/Pedidos'
import { Menu } from './routes/Menu/Menu'
import InicioSesion from './routes/InicioSesion/InicioSesion'
import { Footer } from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import { Carrito } from './components/Carrito/Carrito'
import { PanelCarrito } from './routes/PanelCarrito/PanelCarrito'
import { Admin } from './routes/Admin/Admin'
import { AdminDashboard } from './routes/Admin/AdminDashboard'
import { HeaderAdmin } from './components/HeaderAdmin/HeaderAdmin'
import { AgregarProductos } from './routes/Admin/AgregarProductos'
import { ListaProductos } from './routes/Admin/ListaProductos'

function RedirectToHome() {
  const navigate = useNavigate()
  navigate('/')
}

export function App () {
  const [esSesion, setEsSesion] = useState(false)
  const [esAdmin, setEsAdmin] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/inicio-sesion' || location.pathname.includes('/admin')) {
      setEsSesion(true)
    } else {
      setEsSesion(false)
    }

    if(location.pathname.includes('/dashboard')) {
      setEsAdmin(true)
    } else {
      setEsAdmin(false)
    }
  }, [location])

  return (
    <>
      {esSesion ? <></> : <Header />}
      {esAdmin ? <HeaderAdmin /> : <></>}

      {esSesion ? <></> : <Carrito />}
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/carrito' element={<PanelCarrito />} />
        <Route path='/inicio-sesion' element={<InicioSesion />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard/agregar-productos' element={<AgregarProductos />} />
        <Route path='/admin/dashboard/lista-productos' element={<ListaProductos />} />
        <Route path='*' element={<RedirectToHome />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
