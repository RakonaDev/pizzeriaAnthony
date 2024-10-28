import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Inicio } from './routes/Inicio/Inicio'
import { Nosotros } from './routes/Nosotros/Nosotros'
import { Pedidos } from './routes/Pedidos/Pedidos'
import { Menu } from './routes/Menu/Menu'
import InicioSesion from './routes/InicioSesion/InicioSesion'
import { Footer } from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import { Carrito } from './components/Carrito/Carrito'
import { PanelCarrito } from './routes/PanelCarrito/PanelCarrito'

function App () {
  const [esSesion, setEsSesion] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/inicio-sesion') {
      console.log('sesion')
      setEsSesion(true)
    } else {
      setEsSesion(false)
    }
  }, [location])

  return (
    <>
      {esSesion ? <></> : <Header />}
      <Carrito />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/carrito' element={<PanelCarrito />} />
        <Route path='/inicio-sesion' element={<InicioSesion />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
