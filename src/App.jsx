import { useState } from 'react'
import './App.css'
import './components/Buscador'
import Buscador from './components/Buscador'
import CardCategory from './components/CardCategory'
import CardProduct from './components/CardProduct'
import logo from './assets/logo-sinLetrasFondo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buscador/>

    <h3>Explora nuestras categorías</h3>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row cardsContainers">
      <CardCategory/>
      <CardCategory/>
      <CardCategory/>
      <CardCategory/>
      </div>
    </div>

    <h3>Recomendaciones</h3>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row cardsContainers">
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
