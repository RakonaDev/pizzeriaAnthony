import PropTypes from 'prop-types'
import { ProductoCard } from './ProductoCard'

export default function Bebidas({ productos }) {
  productos = productos.filter((producto) => producto.id_categoria === 2)

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

Bebidas.propTypes = {
  productos: PropTypes.array.isRequired
}