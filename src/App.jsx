
import './App.css'
import { Header } from './Components/Layouts/Header.jsx/Header'
import { Card } from './Components/Card/Card'
import {Main} from './Components/Layouts/Main/Main'
import { useState,useEffect } from 'react'


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);
  return (
    <>
     <Header>
     </Header>
     <Main>    
      {
        products.map(x=>
          <Card
          key={x.id}
          id={x.id}
          title={x.title}
          image={x.image}
          category={x.category}
          description={x.description}
          price={x.price}
          />
        )
      }
     

     </Main>
    </>
  )
}
export default App
