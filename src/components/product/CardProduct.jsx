import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import '../../styles/Cards.css'
import producto from '/producto1.jpg'


function CardProduct({ id, name, price,}) {

  /*const { setArr } = createContext();
  const [selectedProduct, setSelectedProduct] = useState();
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const array = JSON.parse(localStorage.getItem('arr'));
    const existsProduct = array.find((elemento) => elemento.id === selectedProduct.id);
    if (existsProduct) {
        console.log('No se puede agregar el producto ya existe');
    } else {
        alert(`Se añadió ${selectedProduct.name} a favoritos`);
        array.push(selectedProduct);
        localStorage.setItem('arr', JSON.stringify(array));
        setArr(array);
    }
  }*/


  return (
    <>
      <Link
        to={`/productDetails/${id}`}
        className='col-lg-6 col-md-6 col-sm-12 card-space'
      >
        <div className='card text-center bg-dark animate__animated animate__fadeInUp card-hover-effect'>
          <div className='overflow'>
            <img
              src={producto}
              alt=''
              className='card-img-top imgCardProducto'
            />
          </div>
          <div className='text-light'>
            <p className='card-title'>{name}</p>
            <p>USD {price}</p>
          </div>
        </div>
      </Link>
      
    </>
  )
}

export default CardProduct
