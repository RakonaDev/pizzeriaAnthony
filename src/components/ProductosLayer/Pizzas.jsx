import PropTypes from 'prop-types'
import { ProductoCard } from './ProductoCard'

export function Pizzas ({  productos }) {
  productos = productos.filter((producto) => producto.id_categoria === 1)


  return (
    <>
      <div className='mt-10 flex gap-5 flex-wrap'>
        {  productos.map((producto) => (
          <ProductoCard key={producto.id_producto} productoItem={producto} /> )
          )
        }
      </div>
    </>
  )
}

Pizzas.propTypes = {
  productos: PropTypes.array.isRequired
}