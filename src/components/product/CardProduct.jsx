import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import '../../styles/Cards.css'
import imageNotAvailable from '/no-image-available.png'
import FavButton from '../FavButton';
import { useAuthStore } from '../../hooks/useAuthStore'


function CardProduct({ id, name, price, image }) {
  const cardImage = imageNotAvailable
  const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])




  return (
    <>
      
        <div className='card text-center  animate__animated animate__fadeInUp card-hover-effect cardProduct'>
        <div className='cardFavBtn'>
              {status === 'not-authenticated' ? null : <FavButton id={id} email={user.sub}/>}
            </div>
          <Link
            to={`/productDetails/${id}`}
            
          >
          <div className='overflow'>
            <img
              src={image}
              alt=''
              className='card-img-top imgCardProducto'
            />
          </div> 
          </Link>
          <div className='text-light'>
            <p className='card-title'>{name}</p>
            <p>USD {price}</p>
            
            
          </div>
          
        </div>
     
      
    </>
  )
}

export default CardProduct
