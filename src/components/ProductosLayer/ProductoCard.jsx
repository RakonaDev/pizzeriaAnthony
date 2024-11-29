import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export function ProductoCard ({ productoItem }) {
  const[contador, setContador] = useState(1)
  const[subTotal, setSubTotal] = useState(productoItem.precio)
  const[estaAgregado, setEstaAgregado] = useState(false)

  const { agregarPedido, eliminarPedido } = useContext(CarritoContext)

  const handleIncrementar = () => {
    setContador(contador + 1)
    setSubTotal(subTotal + productoItem.precio)
  }

  const handleDecrementar = () => {
    if(contador === 1) return
    setContador(contador - 1)
    setSubTotal(subTotal - productoItem.precio)
  }

  const agregar = (pedido, contador, subTotal) => {
    setEstaAgregado(true)
    agregarPedido(pedido, contador, subTotal)
  }

  const eliminar = (id) => {
    eliminarPedido(id)
    setEstaAgregado(false)
  }

  return (
    <div className='w-80 h-auto bg-white rounded-lg p-4 flex flex-col gap-2'>
      <img src={productoItem.url_imagen} alt='producto' className='w-auto h-72 object-cover' />
      <h1 className='text-black text-center'>{productoItem.nombre}</h1>
      <p className='text-black text-center h-16'>{productoItem.descripcion}</p>
      <p className='text-black text-center'>S/. {productoItem.precio}</p>
      <div className='flex gap-2 justify-evenly items-center'>
        <button 
          type='button' 
          className='text-black bg-gray-200 px-4 py-2 text-xl rounded-sm' 
          onClick={handleIncrementar}
        >
          +
        </button>
        <div className='my-auto text-black text-xl'>
          { contador }
        </div>
        <button 
          type='button' 
          className='text-black bg-gray-200 px-4 py-2 text-xl rounded-sm' 
          onClick={handleDecrementar}
        >
          -
        </button>
      </div>
      { 
        estaAgregado === false ?
        (<button         
          type='button'
          className='mt-5 text-white bg-rojo-claro px-4 py-2 rounded-md mx-auto w-fit'
          onClick={() =>agregar(productoItem, contador, subTotal)}
        >
          Agregar Pedido
        </button>)
        :
        (
          <button         
            type='button'
            className='mt-5 text-white bg-rojo-claro px-4 py-2 rounded-md mx-auto w-fit'
            onClick={() =>eliminar(productoItem.id_producto)}
          >
            Eliminar Pedido
          </button>
        )
      }

      
    </div>
  )
}

ProductoCard.propTypes = {
  productoItem: PropTypes.object.isRequired
}