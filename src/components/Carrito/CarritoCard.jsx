import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export function CarritoCard ({ pedido }) {
  const { eliminarPedido } = useContext(CarritoContext)

  return (
    <div className='w-[30rem] p-4 bg-white shadow-md rounded-lg'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <img src={pedido.url_imagen} alt={pedido.nombre} className='w-10 h-10 rounded-full' />
          <div className='ml-2 flex flex-col text-nowrap overflow-hidden text-ellipsis w-[10rem]'>
            <h1 className='text-xl font-bold'>{pedido.nombre}</h1>
            <p className='text-sm'>S/. {pedido.precio}</p>
            <p className='text-sm'>Cantidad: { pedido.cantidad }</p>
          </div>
        </div>
        <div className='text-right'>
          <button 
            type='button'
            onClick={() => eliminarPedido(pedido.id_producto)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

CarritoCard.propTypes = {
  pedido: PropTypes.object.isRequired
}