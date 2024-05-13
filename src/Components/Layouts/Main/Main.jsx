import { useEffect,useState } from 'react'


export const Main = ({children}) => {
  
  

  return (
    <main className='flex flex-wrap justify-around'>
      {children}
    </main>
  );
};