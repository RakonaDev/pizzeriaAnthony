import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

export function PerfilUsuario () {
  const { usuario } = useContext(UsuarioContext)

  return (
    <div className='text-white flex gap-x-4 items-center text-base'>
      <i className='fa-solid fa-user' />
      <h1 className='cursor-default'>Bienvenido {usuario.name ? usuario.name : 'Usuario'}</h1>
    </div>
  )
}
