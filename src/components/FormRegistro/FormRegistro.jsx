import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

export function FormRegistro ({ setEsInicio }) {
  const [mostrarContrasena, setMostrarContrasena] = useState(false)
  const ref = useRef()

  const cambiarEstado = () => {
    setEsInicio(true)
  }

  const mostrar = () => {
    ref.current.focus()
    setMostrarContrasena(!mostrarContrasena)
  }

  return (
    <>
      <form
        action='#'
        className='w-full h-full flex flex-col justify-center items-center'
        method='post'
      >
        <h1 className='text-center text-3xl'>Registrate</h1>
        <div className='mb-3 flex flex-col mt-6 w-full px-16'>
          <label htmlFor='nombre'>Nombre Completo: </label>
          <input
            type='text'
            name='nombre'
            id='nombre'
            className='border-2 border-black p-1 rounded-2xl  focus-within:border-white'
            required
          />
        </div>
        <div className='mb-3 flex flex-col w-full px-16'>
          <label htmlFor='usuario'>Email: </label>
          <input
            type='email'
            name='usuario'
            id='usuario'
            className='border-2 border-black p-1 rounded-2xl  focus-within:border-white'
            required
          />
        </div>
        <div className='mb-3 flex flex-col w-full px-16 relative '>
          <label htmlFor='contrasena'>Contraseña: </label>
          <input
            type={mostrarContrasena ? 'text' : 'password'}
            name='contrasena'
            id='contrasena'
            className=' relative border-2 border-black p-1 rounded-2xl focus-visible:border-white'
            required
            ref={ref}
          />
          <div htmlFor='contrasena' className='absolute top-8 right-20' onClick={mostrar}>
            <i className='fa-solid fa-eye' />
          </div>
        </div>
        <div className='mb-8 flex flex-col w-full px-16'>
          <label htmlFor='contrasena'>Confirma Contraseña: </label>
          <input
            type='password'
            name='contrasena'
            id='contrasena'
            className='border-2 border-black p-1 rounded-2xl focus-visible:border-white'
            required
          />
        </div>
        <input
          type='submit'
          value='Registrar'
          className='mx-auto py-2 px-10 rounded-lg bg-rojo-claro text-white cursor-pointer transition-colors duration-500 hover:bg-rojo-claro-oscuro'
        />
        <p className='mt-4'>Ya tienes cuenta?</p>
        <button
          type='button'
          className='mt-1 py-2 px-5 bg-slate-800 text-white rounded-lg transition-colors duration-500 hover:bg-slate-600'
          onClick={cambiarEstado}
        >
          Iniciar Sesión
        </button>
      </form>
    </>
  )
}

FormRegistro.propTypes = {
  setEsInicio: PropTypes.func.isRequired
}
