import './App.css'
import './index.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './routes/Inicio/Inicio'
import { Nosotros } from './routes/Nosotros/Nosotros'
import { Pedidos } from './routes/Pedidos/Pedidos'
import { Menu } from './routes/Menu/Menu'
import InicioSesion from './routes/InicioSesion/InicioSesion'
<<<<<<< HEAD
import { Footer } from './components/Footer/Footer'
=======
>>>>>>> ab2b3a1fec1ee01100d24738f3adc9af410137ee

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
<<<<<<< HEAD
      
      <Footer></Footer>
=======
>>>>>>> ab2b3a1fec1ee01100d24738f3adc9af410137ee
    </>
  )
}

export default App
