import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './routes/Inicio/Inicio'
import { Nosotros } from './routes/Nosotros/Nosotros'
import { Pedidos } from './routes/Pedidos/Pedidos'
import { Menu } from './routes/Menu/Menu'
import InicioSesion from './routes/InicioSesion/InicioSesion'

function App() {

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
      </Routes>
    </>
  )
}

export default App
