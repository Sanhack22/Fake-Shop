import { useEffect,useState } from 'react'
export const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);
  

  return (
    <main>
      <div className='flex flex-wrap  justify-around '>
        {products.map(product => (
          <div key={product.id} className='w-60 flex flex-col relative items-center border border-orange-700 mb-10'>
            <div className='flex flex-col items-center h-3/6'>
              <h3 className='text-2xl h-2/4'>{product.title}</h3>
              <div className='h-32 flex w-1/2 items-end'>
                <img className=' h-full w-full	' src={product.image} alt={product.title} />

              </div>
            </div>
            <div className='w-11/12 max-h-48 overflow-y-scroll		'>
              <span className='absolute top-10 right-0 bg-green-500 w-16 border rounded-r-lg text-white'>{"$"+product.price}</span>
              <p className='text-xl'>{product.category}:</p>
              <p className='text-l mb-5 	'>{product.description}</p>
            </div>
            <button className='bg-green-500 text-white w-1/2 text-center'>Añadir</button>
          </div>
        ))}
      </div>
    </main>
  );
};