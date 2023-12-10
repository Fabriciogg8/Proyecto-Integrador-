import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import '../../styles/Cards.css'
import imageNotAvailable from '/no-image-available.png'

function CardProduct({ id, name, price, image }) {
  const cardImage = imageNotAvailable
 
  return (
    <>
      <Link
        to={`/productDetails/${id}`}
        className='col-lg-6 col-md-6 col-sm-12 card-space'
      >
        <div className='card text-center bg-dark animate__animated animate__fadeInUp card-hover-effect'>
          <div className='overflow'>
            <img
              src={image}
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
