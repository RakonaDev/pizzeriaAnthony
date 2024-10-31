
import inicio from '../../assets/Inicio/inicio.jpg'
import './Inicio.css'

export function Inicio () {
  return (
    <>
      <div className='w-full h-screen relative'>
        <img src={inicio} alt='banner' className='w-full h-screen object-cover absolute top-0 left-0' />
      </div>
      <main className='w-full h-auto'>
        Putitos
      </main>
    </>
  )
}
