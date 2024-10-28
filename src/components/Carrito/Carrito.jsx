import { NavLink } from 'react-router-dom'
import './Carrito.css'

export function Carrito () {
  return (
    <div className='w-auto flex gap-y-3 flex-col items-end h-auto fixed bottom-2 right-4 z-50 transition-all duration-700'>
      <NavLink
        className='w-14 h-14 bg-rojo-claro-oscuro rounded-full flex justify-center items-center cursor-pointer'
        to='/carrito'
      >
        <i className='fa-solid fa-cart-shopping text-xl text-white' />
      </NavLink>
    </div>
  )
}
