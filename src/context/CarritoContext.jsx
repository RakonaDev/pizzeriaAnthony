import { createContext, useEffect, useState } from 'react'

/* Context para mantener los pedidos en memoria */
// NO BORRAR
export const CarritoContext = createContext()

/* Provider para tener todos los pedidos */
// NO BORRAR
export function CarritoProvider ({ children }) {
  const [pedidos, setPedidos] = useState(Array)

  useEffect(() => {
    if (sessionStorage.getItem('pedidos') != null) {
      setPedidos(sessionStorage.getItem('pedidos'))
    } else {
      setPedidos([])
    }
  }, [])

  return (
    <CarritoContext.Provider value={{ pedidos, setPedidos }}>
      {children}
    </CarritoContext.Provider>
  )
}
