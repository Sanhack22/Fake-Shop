
export const Card = (title,Category,Description,Price,Image) => {
  return (
    <div className='w-1/6 flex flex-col relative items-center border border-orange-700	' >
      <div className='flex flex-col items-center'>
        <h3 className='text-3xl'>{title}</h3>
        <img src={Image}></img>
      </div>
      <div className='w-8/12'>
          <span className=' absolute top-10 right-0 bg-green-500 w-16 border rounded-r-lg text-white'>{Price}</span>
          <p className='text-xl'>{Category}:</p>
          <p className='text-xl mb-5'>{Description}</p>
      </div>
        <button className='bg-green-500 text-white w-1/2  text-center'>Añadir</button>
    </div>
  )
}
