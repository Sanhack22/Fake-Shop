import { CarShoping } from '../../CarShoping/CarShoping'
// import {img} from '../../../../public/Images/nick-nice-gPm8h3DS1s4-unsplash.jpg'


export const Header = () => {
  return (
      <header className='mb-10'>
            <div className='fixed top-0 left-0 right-0 z-10 flex justify-between  bg-black/90	h-20 font-serif items-center'>
              <h1 className='text-3xl	font-title3 text-white ml-20 '>Fake Shop</h1>
              <ul className=' items-center flex w-80 justify-around text-xl text-teal-50 mr-20'>
                <li className='font-title3 border px-4 py-1'>Inicio</li>
                <li className='font-title3 border px-4 py-1 '>Productos</li>
                <li className='font-title3 border px-4 py-1'>Compras</li>
                <li className=' border px-4 py-1'><CarShoping/></li>
              </ul>

            </div>
            <div  className=" h-screen bg-contain bg-center bg-[url('../../../../public/Images/nick-nice-gPm8h3DS1s4-unsplash.jpg')] flex flex-col justify-center items-center	">
                <div className='flex flex-col items-center bg-white/20 p-10'>
                  <h1 className=' animate-jump-in text-7xl font-title3 tracking-wide text-lime-50'>BIENVENIDO</h1>
                  <h2 className='animate-jump-in font-title2 text-2xl text-lime-50'>santiago shop</h2>
                </div>
              
            </div>
        
            
      </header>
  )
}
