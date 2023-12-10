import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import '../../styles/Cards.css'
import imageNotAvailable from '/no-image-available.png'
import FavButton from '../FavButton';
import { useAuthStore } from '../../hooks/useAuthStore'
import { USER_FAVORITES } from '../../helpers/endpoints'

function CardProduct({ id, name, price }) {
  const cardImage = imageNotAvailable
  const { status, user, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [status])

  
 


  /*const token = localStorage.getItem('token')
  const getData = async () => {
    try {
        const response = await fetch(`${USER_FAVORITES}?userEmail=${user.sub}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        } catch (error) {
            console.error("Error al obtener datos en el coso:", error);
        }
    };
    useEffect(()=>{
        getData();
    }, [])*/





  useEffect(() => {
    /*console.log(user.sub)
    fetch(USER_FAVORITES+`?userEmail=${user.sub}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJMZWFuZHJvIiwibGFzdE5hbWUiOiJBZG1pbiIsInJvbGUiOiJBRE1JTiIsInN1YiI6ImxlYW5kcm9AYWRtaW4uY29tIiwiaWF0IjoxNzAyMDg0ODgwLCJleHAiOjE3MDIxNzEyODB9.nHqCfL_S-a-jpg2CvvZzgnelkD_vThdNfomRAgNCKaE",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavs(data);
        console.log(data);
      })
      .catch((error) => console.log(error));*/
  }, []);


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
              src={cardImage}
              alt=''
              className='card-img-top imgCardProducto'
            />
          </div> 
          </Link>
          <div className='text-light'>
            <p className='card-title tituloCard'>{name}</p>
            <p>USD {price}</p>
            
            
          </div>
          
        </div>
     
      
    </>
  )
}

export default CardProduct
