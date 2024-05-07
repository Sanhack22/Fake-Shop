import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Layouts/Header.jsx/Header'
import { FaShoppingCart } from "react-icons/fa";
import { Card } from './Components/Card/Card'
import {Main} from './Components/Layouts/Main/Main'


function App() {
  return (
    <>
     <Header>
       <h2 className=''>Fake Store</h2>
       <FaShoppingCart></FaShoppingCart>
     </Header>
     <Main>
      <Card/>
     </Main>
    </>
  )
}
export default App
