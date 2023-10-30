import React, { useState, useEffect } from 'react';

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
  const [producto, setProducto] = useState({});
    


    const getProducto = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/v1/products`);
            const data = await res.json();
            if (data && data.length > 0) {
              setProducto(data[0]);
            }
        } catch (error) {
            console.error('Error fetching producto:', error);
        }
    };

    useEffect(() => {
      getProducto();
  }, []);
  //-----js para el slide de marcas

  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
    
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }


  //-------------
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


    <div>
            <h2>Prod</h2>
            <div>
                
                <p>{producto.name}</p>
                
            </div>
            
        </div>
   

    <div className="scroller" data-direction="right" data-speed="slow">
      <div className="scroller__inner">
        <img src={stagg} height="90" width="110" alt="" />
        <img src={takamine} height="90" width="110" alt="" />
        <img src={laney} height="90" width="110" alt="" />
        <img src={jackson} height="90" width="110" alt="" />
        <img src={godin} height="90" width="110" alt="" />
        <img src={godin} height="90" width="110" alt="" />
        <img src={godin} height="90" width="110" alt="" />
        <img src={godin} height="90" width="110" alt="" />
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
