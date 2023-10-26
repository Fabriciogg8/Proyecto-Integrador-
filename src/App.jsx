import { useState } from 'react'
import './App.css'
import './components/Buscador'
import Buscador from './components/Buscador'
import CardCategory from './components/CardCategory'
import CardProduct from './components/CardProduct'

import godin from './assets/godin.jpg'
import jackson from './assets/jackson.jpg'
import laney from './assets/laney.jpg'
import stagg from './assets/stagg.jpg'
import takamine from './assets/takamine.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buscador/>

      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row cardsContainers">
        <CardCategory/>
        <CardCategory/>
        <CardCategory/>
        <CardCategory/>
        </div>
    </div>
   
    
    <div className='titulosCategorias'>
      <h3>Recomendaciones</h3>
    </div>
    
    
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row cardsContainers">
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      </div>
    </div>



    
	



    </>
  )
}

export default App
