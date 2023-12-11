import '/src/styles/FavouritesList.css'
import { useEffect, useState } from 'react';
import { USER_FAVORITES } from '../../helpers/endpoints';
import { useAuthStore } from '/src/hooks/useAuthStore';
import FavouriteCards from '../product/FavouriteCards';

const FavouritesList = () => {
  const [favs, setFavs] = useState([])
  const { user } = useAuthStore()

  const token = localStorage.getItem('token')
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
        setFavs(data)
        } catch (error) {
            console.error("Error al obtener datos en el coso:", error);
        }
    };
    useEffect(()=>{
        getData();
    }, [])
    /* */
    return (
      <div>
        <div className='row cardsContainers'>
        {favs.map(instrumento => {
          const imagen =
            instrumento.images && instrumento.images.length > 0 
              ? instrumento.images[0]
              : null
          return (
            <FavouriteCards
              key={instrumento.id}
              id={instrumento.id}
              name={instrumento.name}
              price={instrumento.price}
              image={imagen}
            />
          )
        })}
      </div>
          
      </div>
    );
    
}

export default FavouritesList;
