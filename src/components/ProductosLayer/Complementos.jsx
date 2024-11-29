import PropTypes from 'prop-types'
import { ProductoCard } from './ProductoCard'

export default function Complementos({ productos }) {
  productos = productos.filter((producto) => producto.id_categoria === 4)

  return (
    <>
      <div className='mt-10 flex gap-4 flex-wrap'>
        {  productos.map((producto) => (
          <ProductoCard key={producto.id_producto} productoItem={producto} /> )
          )
        }
      </div>
    </>
  )
}

Complementos.propTypes = {
  productos: PropTypes.array.isRequired
}
