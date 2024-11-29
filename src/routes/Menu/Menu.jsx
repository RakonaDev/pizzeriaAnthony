import { useEffect, useState } from 'react'
import './Menu.css'
import { Pizzas } from '../../components/ProductosLayer/Pizzas'
import Complementos from '../../components/ProductosLayer/Complementos'
import Bebidas from '../../components/ProductosLayer/Bebidas'
import { useProductos } from '../../zustand/useProductos'

export function Menu () {
  const { cargarProductos, productos } = useProductos()
  const[activarPizza, setActivarPizza] = useState(true)
  const[activarComplemento, setActivarComplemento] = useState(false)
  const[activarBebida, setActivarBebida] = useState(false)


  useEffect(() => {
    if(productos.length === 0) {
      cargarProductos()
    }
  }, [])


  const handlePizza = () => {
    setActivarPizza(true)
    setActivarComplemento(false)
    setActivarBebida(false)
  }

  const handleComplemento = () => {
    setActivarComplemento(true)
    setActivarPizza(false)
    setActivarBebida(false)
  }

  const handleBebida = () => {
    setActivarBebida(true)
    setActivarPizza(false)
    setActivarComplemento(false)
  }

  return (
    <>
      <main className='min-h-screen bg-medio-blanco pt-20 container mx-auto'>
        <article className='flex w-full gap-10 justify-center py-5'>
          <button 
            type='button'
            className='text-xl'
            onClick={handlePizza}
          >
            Pizzas
          </button>
          <button
            type='button'
            className='text-xl'
            onClick={handleComplemento}
          >
            Complementos
          </button>
          <button 
            type='button'
            className='text-xl'
            onClick={handleBebida}
          >
            Bebidas
          </button>
        </article>
        <section className='flex gap-4 justify-evenly '>
          { activarPizza && <Pizzas productos={productos} /> }
          { activarComplemento && <Complementos productos={productos} /> }
          { activarBebida && <Bebidas productos={productos} /> }
        </section>
      </main>
    </>
  )
}
