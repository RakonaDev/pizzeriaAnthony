import PropTypes from 'prop-types'

export function FormInicio ({ setEsInicio }) {
  const cambiarEstado = () => {
    setEsInicio(false)
  }

  return (
    <>
      <form
        action='#'
        className='w-full h-full flex flex-col justify-center items-center'
        method='post'
      >
        <h1 className='text-center text-3xl'>Inicia Sesión</h1>
        <div className='mb-3 flex flex-col mt-6 w-full px-16'>
          <label htmlFor='usuario'>Email: </label>
          <input
            type='email'
            name='usuario'
            id='usuario'
            className='border-2 border-black p-1 rounded-2xl  focus-within:border-white'
            required
          />
        </div>
        <div className='mb-8 flex flex-col w-full px-16'>
          <label htmlFor='contrasena'>Contraseña: </label>
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
          value='Iniciar'
          className='mx-auto py-2 px-10 rounded-lg bg-rojo-claro text-white cursor-pointer transition-colors duration-500 hover:bg-rojo-claro-oscuro'
        />
        <p className='mt-4'>No tienes cuenta? Registrate</p>
        <button
          type='button'
          className='mt-1 py-2 px-5 bg-slate-800 text-white rounded-lg transition-colors duration-500 hover:bg-slate-600'
          onClick={cambiarEstado}
        >
          Registrarme
        </button>
      </form>
    </>
  )
}

FormInicio.propTypes = {
  setEsInicio: PropTypes.func.isRequired
}
