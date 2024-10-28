import './Footer.css'

export function Footer () {
  return (
    <>
      <footer className='w-full h-16 bg-slate-800 text-white z-30'>
        <div className='container max-w-7xl h-full mx-auto flex justify-end ps-2 pe-2 max-sm:justify-center'>
          <p className='cursor-default my-auto'>Copyright &copy; 2024 Pizzeria Anthony</p>
        </div>
      </footer>
    </>
  )
}
