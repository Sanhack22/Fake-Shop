import { useState, useContext } from "react"
import { shopContext } from "../Context/Context"
import {CardCar} from "../CardCar/CardCar"


export const CarShoping = () => {
  const shop= useContext(shopContext)

  const [showCard,setShowCard] = useState(true)

  function showProducts() {
    setShowCard(!showCard)

  }
  return (
    <>
        <svg  onClick={showProducts} className=" h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
        {showCard && (
          <div>
            <div className="bg-black h-80 fixed absolute right-20 top-20 w-1/3 max-h-80 overflow-y-auto ">
            {shop.CarProducts.map(x=>

            <CardCar key={x.id}
              image={x.image}
              title={x.title}
              cantidad={x.cuantity}
            />

            
            )}
                    

          </div>
          
          </div>
         
      )}
    </>
    
  )
}   
