import './Header.css'
import logoPizza from '../../assets/Header/logoPizza.jpg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'
import { InicioBoton } from '../InicioBoton/InicioBoton'
import { PerfilUsuario } from '../PerfilUsuario/PerfilUsuario'

export function Header () {
  const { usuarioLogeado } = useContext(UsuarioContext)

  return (
    <header className='w-full h-16 bg-rojo-claro fixed top-0 z-30'>
      <div className='container max-w-7xl mx-auto ps-2 pe-2 flex justify-between'>
        <div className=''>
          <img
            src={logoPizza}
            alt='logoPizza'
            className='w-16 h-16 object-cover mx-auto'
          />
        </div>
        <nav className='flex w-[40%] my-auto justify-between'>
          <NavLink to='/' className='text-white font-bold'>Inicio</NavLink>
          <NavLink to='/menu' className='text-white font-bold'>Menu</NavLink>
          <NavLink to='/nosotros' className='text-white font-bold'>Nosotros</NavLink>
          <NavLink to='/pedidos' className='text-white font-bold'>Pedidos</NavLink>
        </nav>
        <div className='h-16 w-fit flex items-center'>
          {usuarioLogeado ? <PerfilUsuario /> : <InicioBoton />}
        </div>
      </div>
    </header>
  )
}
