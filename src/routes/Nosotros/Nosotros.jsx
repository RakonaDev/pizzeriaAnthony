import './Nosotros.css'

import Proposito from '../../assets/Nosotros/proposito.svg'
import Vision from '../../assets/Nosotros/vision.svg'
import Mision from '../../assets/Nosotros/mision.svg'
import NosotrosBackground from '../../assets/Nosotros/nosotros.jpeg'

export function Nosotros () {
  return (
    <>
      <div className='w-full h-16 bg-rojo-claro' />
      <div className='w-full h-auto bg-medio-blanco'>
        <div className='relative w-full h-screen'>
          <img
            src={NosotrosBackground}
            alt='background'
            className='w-full h-screen object-cover absolute top-0'
          />
          <div className='w-full bg-opacity-30 bg-black h-screen text-medio-blanco z-20 text-5xl relative flex items-center max-sm:justify-center'>
            <h1 className='z-20 ps-16 font-bold max-sm:ps-0'>Nosotros</h1>
          </div>
        </div>
        <div className='container max-w-7xl mx-auto ps-2 pe-2'>
          <h1 className='text-3xl font-bold text-rojo-claro-oscuro pt-9 text-center md:text-start'>
            Propósito
          </h1>
          <div className='w-full flex flex-wrap '>
            <p className='text-base pt-5 my-auto w-[100%] text-justify md:w-[65%]'>
              El propósito de Anthonys Pizza es llevar a cada cliente una
              experiencia auténtica y memorable de la pizza italiana, ofreciendo
              no solo un plato delicioso sino también un espacio donde se
              celebren los valores de la familia, la amistad y la comunidad. Nos
              esforzamos por ser un lugar donde cada cliente se sienta valorado
              y donde cada bocado les recuerde el gusto por lo sencillo y lo
              bien hecho, transmitiendo así la pasión y el amor que ponemos en
              nuestra cocina.
            </p>
            <img
              src={Proposito}
              alt='Proposito'
              className='w-[100%] md:w-[35%]'
            />
          </div>
          <h1 className='text-3xl font-bold text-rojo-claro-oscuro pt-3 text-center md:text-start'>
            Visión
          </h1>
          <div className='w-full flex flex-wrap-reverse s:flex-wrap'>
            <img src={Vision} alt='Proposito' className='w-[100%] md:w-[35%]' />
            <p className='text-base pt-5 my-auto w-[100%] text-justify md:w-[65%]'>
              Nuestra visión es convertirnos en el lugar de referencia para los
              amantes de la pizza auténtica en la ciudad,reconocidos no solo
              por la calidad y autenticidad de nuestras pizzas, sino también por
              nuestro compromiso constante con la innovación y la excelencia en
              el servicio. Aspiramos a expandirnos y ser un punto de encuentro
              para familias, amigos y cualquier persona que busque una
              experiencia gastronómica genuina y agradable. Queremos que
              Anthonys Pizza sea sinónimo de tradición y sabor, un lugar donde
              cada cliente se sienta parte de nuestra familia y de nuestra
              historia culinaria.
            </p>
          </div>
          <h1 className='text-3xl font-bold text-rojo-claro-oscuro text-center md:text-start'>
            Misión
          </h1>
          <div className='w-full flex flex-wrap'>
            <p className='text-base pt-5 my-auto w-[100%] text-justify md:w-[65%]'>
              En Anthonys Pizza, nuestra misión es transfomar una comida en un
              momento especial para cada cliente. Nos dedicamos a ofrecer pizzas
              de alta calidad, utilizando siempre los ingredientes más frescos y
              métodos tradicionales que nos permiten capturar el sabor auténtico
              de la pizza italiana. Cada miembro de nuestro equipo es apasionado
              por la cocina y comprometido con brindar un servicio amable y
              atento, creando un ambiente familiar y acogedor. Queremos que cada
              visita sea una experiencia memorable, que inspire a nuestros
              clientes a regresar para disfrutar de una comida auténtica y
              compartir momentos significativos en nuestra pizzería.
            </p>
            <img src={Mision} alt='Proposito' className='w-[100%] md:w-[35%]' />
          </div>
        </div>
      </div>
    </>
  )
}
