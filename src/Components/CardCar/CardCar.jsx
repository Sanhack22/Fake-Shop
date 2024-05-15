import React from 'react'

export const CardCar = ({image,title,cantidad}) => {
  return (
    <div className='bg-black h-32 flex mt-1'>
      <div className='h-full w-36 flex justify-center items-center bg-white mr-5'>
        <img className='h-28' src={image}/>
      </div>
      <div className='w-72'>
        <h2 className='text-sm'>{title}</h2>
      </div>
      <p >{"X"+cantidad}</p>
    </div>
  )
}
