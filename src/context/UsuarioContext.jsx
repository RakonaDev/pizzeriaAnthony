import { useEffect, useState, createContext, useCallback } from 'react'
import { useFetch } from '../hooks/useFetch'
import PropTypes from 'prop-types';

export const UsuarioContext = createContext();

export function UsuarioProvider ({ children }) {
  const [usuario, setUsuario] = useState([])
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [response, error] = useFetch(import.meta.env.VITE_API_URL + 'me', 'GET', localStorage.getItem('token'))
  /*
  useEffect(() => {
    if (!error) {
      setUsuarioLogeado(true)
      setUsuario(response)
    } else {
      setUsuarioLogeado(false)
    }
    console.log(error)
  }, [response, error])
  */
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUsuarioLogeado(true)
    }
  }, [localStorage.getItem('token')])

  return (
    <UsuarioContext.Provider value={{ usuario, usuarioLogeado }}>
      {children}
    </UsuarioContext.Provider>
  )
}

UsuarioProvider.propTypes = {
  children: PropTypes.node.isRequired
}
