import './Pedidos.css'
import Perdido from '../../assets/Pedidos/perdido.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

export function Pedidos () {
  const { usuarioLogeado } = useContext(UsuarioContext)

  return (
    <>
      <div className='w-full h-16 bg-rojo-claro' />
      <div className='w-full h-screen relative'>
        <div className='container max-w-7xl h-full mx-auto ps-2 pe-2 flex justify-center items-center'>
          <div className='w-[500px] h-auto flex flex-col justify-center items-center'>
            <img src={Perdido} alt='perdido' className='w-[70%] object-cover' />
            <h1>{usuarioLogeado ? 'No cuentas con pedidos' : 'Debes estar logeado para ver tus pedidos'}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
