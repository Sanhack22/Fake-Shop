
import { createContext,useState,useEffect } from "react";
export const shopContext = createContext();



export const ShopProvider =({children}) =>{
    const [CarProducts,setCarProducts ] = useState([])

  
    

   
    

    return(
       <shopContext.Provider value={{CarProducts,setCarProducts}}>
        {children}
       </shopContext.Provider>
    )
}