import { useContext } from "react";
import { shopContext } from "../Context/Context";


export const Card = ({id,title,image,category,description,price}) => {
  const ProductsContext = useContext(shopContext)

  
  function addProduct(id, title, image, category, description, price) {
    const productExist = ProductsContext.CarProducts.findIndex(product => product.id === id);
  
    if (productExist !== -1) {
      ProductsContext.setCarProducts(prevProducts => {
        const updatedProducts = [...prevProducts];
        updatedProducts[productExist].cuantity++;
        return updatedProducts;
      });
    } else {
      const newProduct = {
        id: id,
        title: title,
        image: image,
        category: category,
        description: description,
        price: price,
        cuantity: 1
      };
  
      ProductsContext.setCarProducts(prevProducts => [...prevProducts, newProduct]);
    }
  }
  
  return (
          <div  className='w-72 h-96 flex flex-col relative items-center border-2 shadow-lg shadow-black/30 border-black mb-10'>
            <div className='flex flex-col items-center h-48 mb-1'>
              <h3 className='leading-6	 text-2xl max-h-14  font-title3 text-center mb-5' >{title}</h3>
              <div className='h-32 flex w-full justify-center'>
                <img className='h-full w-28' src={image}  />
              </div>
            </div>
            <p className='text-xl'>{category}</p>
            <div className='w-11/12 mb-5	'>
              <span className='font-title absolute top-20 left-2 bg-black w-16 border rounded-r-lg text-white'>{"$"+price}</span>
              <p className='text-sm h-24 max-h-24 overflow-y-scroll'>{description}</p>
            </div >
            <div className=''>
              <button onClick={()=>addProduct(id,title,image,category,description,price)} className='hover:bg-black hover:text-white duration-300 text-l w-32 font-title flex justify-center items-center bg-white text-black  text-center border-2 border-black'>Añadir</button>
            </div>
          </div>
  )
}
