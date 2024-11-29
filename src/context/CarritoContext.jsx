import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/* Context para mantener los pedidos en memoria */
// NO BORRAR
export const CarritoContext = createContext()

/* Provider para tener todos los pedidos */
// NO BORRAR
export function CarritoProvider ({ children }) {
  const [pedidos, setPedidos] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('pedidos') != null) {
      setPedidos(JSON.parse(localStorage.getItem('pedidos')))
    } 
  }, [])

  const agregarPedido = (pedido, cantidad, subtotal) => {
    let nuevoPedido = {...pedido, cantidad, subtotal}
    pedidos.push(nuevoPedido)
    setPedidos(pedidos)
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
  }

  const eliminarPedido = (id) => {
    const pedidosFiltrados = pedidos.filter((pedido) => pedido.id_producto !== id)
    setPedidos(pedidosFiltrados)
    localStorage.setItem('pedidos', JSON.stringify(pedidosFiltrados))
  }

  const registrarPedido = (direccion, telefono) => {
    let nuevoTotal = 0
    pedidos.map((detalle) => {
      nuevoTotal = nuevoTotal + detalle.subtotal 
    })
    setTotal(nuevoTotal)
    const detalle_pedidos = JSON.parse(localStorage.getItem('pedidos'))
    let pedidos = {
      total: total,
      direccion: direccion,
      telefono: telefono,
      detalle_pedido: detalle_pedidos
    }

    fetch(import.meta.env.VITE_API_URL + 'pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(pedidos)
    })
      .then((response) => {
        if(!response.ok) throw new Error
        return response.json()
      })
      .then((data) => {
        alert("Pedido enviado con exito")
        localStorage.removeItem('pedidos')
        setPedidos([])
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <CarritoContext.Provider value={{ pedidos, setPedidos, agregarPedido, eliminarPedido, registrarPedido }}>
      {children}
    </CarritoContext.Provider>
  )
}

CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired
}