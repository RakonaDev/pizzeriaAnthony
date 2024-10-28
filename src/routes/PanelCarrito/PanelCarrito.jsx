import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export function PanelCarrito () {
  const { pedidos } = useContext(CarritoContext)
  console.log(pedidos.length)

  if (pedidos.length === 0) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <h1>NO HAY NADA</h1>
      </div>
    )
  } else {
    return (
      <div className='w-full h-auto max-h-screen flex justify-center items-center'>
        OK
      </div>
    )
  }
}
