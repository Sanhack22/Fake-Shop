import { CarShoping } from '../../CarShoping/CarShoping'


export const Header = () => {
  return (
      <header className='flex justify-around bg-emerald-600	h-20 font-serif items-center '>
        <h1 className='text-2xl	'>Fake Shop</h1>
        
            <ul className='flex w-3/12 justify-around text-xl'>
              <li>Inicio</li>
              <li>Inicio</li>
              <li>Inicio</li>
              <CarShoping></CarShoping>
            </ul>
      </header>
  )
}
