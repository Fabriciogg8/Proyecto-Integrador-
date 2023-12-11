import { USER_FAVORITES, USER_FAVORITES_REMOVE, USER_FAVORITES_ADD } from '../helpers/endpoints';
import { useEffect, useState } from 'react';

const FavButton = ({id , email}) => {
  const [statusFav, setStatusFav] = useState(false)

  const getData = async () => {
    try {
        const response = await fetch(`${USER_FAVORITES}?userEmail=${email}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        if(data) {
          for (let i = 0; i < data.length; i++) {
            if(data[i].id == id) {
              setStatusFav(true)
            } 
          }
        }
        } catch (error) {
            console.error("Error al obtener datos en el coso:", error);
        }
    };
    useEffect(()=>{
        getData();
    }, [])


    const token = localStorage.getItem('token')
    const handleClick = async () =>{
      var raw = {
        "userEmail": email,
        "productId": id,
        };
      if(statusFav == false) {
        try {
          const response = await fetch(`${USER_FAVORITES_ADD}?userEmail=${email}&productId=${id}`, {
              method: 'POST',
              headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(raw),
          });
          if (response.ok) {
              console.log(response)
          }
          } catch (error) {
              console.error('Error en la solicitud: ', error)
          }
          if(window.location.href.includes("/favourites")){
            window.location.reload();
          }
        } else if (statusFav == true) {
          try {
            const response = await fetch(`${USER_FAVORITES_REMOVE}?userEmail=${email}&productId=${id}`, {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(raw),
            });
            if (response.ok) {
                console.log(response)
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error)
        }
        if(window.location.href.includes("/favourites")){
          window.location.reload();
        }
        
        }
      }
    return (
    <>
      <button className='fav-button' onClick={handleClick}>
        💚
      </button>
    </>
  )
}

export default FavButton
