import { NavLink } from 'react-router-dom'

export function InicioBoton () {
  return (
    <NavLink to='/inicio-sesion' className='text-white p-2 ps-4 pe-4 rounded-full bg-slate-800'>
      <i className='fa fa-user' aria-hidden='true' />
      <span className='ps-2'>Inicio Sesion</span>
    </NavLink>
  )
}
