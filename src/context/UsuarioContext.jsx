import { useEffect, useState, createContext } from 'react'
import { useFetch } from '../hooks/useFetch'
import PropTypes from 'prop-types';

export const UsuarioContext = createContext();

export function UsuarioProvider ({ children }) {
  const [usuario, setUsuario] = useState([])
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)

  const [response, error] = useFetch('http://127.0.0.1:8000/api/me', 'GET', sessionStorage.getItem('token'))

  useEffect(() => {
    if (!error) {
      setUsuarioLogeado(true)
      setUsuario(response)
    } else {
      setUsuarioLogeado(false)
    }
  }, [response, error])

  return (
    <UsuarioContext.Provider value={{ usuario, usuarioLogeado }}>
      {children}
    </UsuarioContext.Provider>
  )
}

UsuarioProvider.propTypes = {
  children: PropTypes.node.isRequired
}
