import inicioBackground from '../../assets/Inicio/inicioBackground.jpg'

export function Inicio() {
  return (
    <>
      <div className='w-full h-screen relative'>
        <img src={inicioBackground} alt="banner" className='w-full h-screen object-cover' />
      </div>
      <div className='w-full '>
        Inicio
      </div>
    </>
  )
}

