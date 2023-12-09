<<<<<<< HEAD
import { useNavigate,useParams } from 'react-router-dom'

import { useContext, useEffect } from 'react'
=======
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
>>>>>>> cf75e18 (agregando leyenda login)
import { ProductContext } from '../conexts/ProductContext'
import CardPolicy from '../components/product/CardPolicy'
import  ProductDetail  from "../components/product/ProductDetail"
import { useAuthStore } from '../hooks/useAuthStore'

<<<<<<< HEAD
const ProductDetails = () => {
  const { id } = useParams();
  const { state, fetchCurrentProduct } = useContext(ProductContext);
  const { user } = useAuthStore();
  const navigate = useNavigate();
=======
export const ProductDetails = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const producto = state.currentProduct
  const { user } = useAuthStore()
  const [showText, setShowText] = useState(false)
>>>>>>> cf75e18 (agregando leyenda login)

  useEffect(() => {
    fetchCurrentProduct(id);
  }, [id, fetchCurrentProduct]);

<<<<<<< HEAD
  const handleOnClickReserva = async () => {
    if (!user.sub || user.sub.trim() === '') {
      // Si el usuario no ha iniciado sesión, redirige al formulario específico para reservas
      navigate('/signinReserva');
=======
  const handlerOnClickReserva = () =>{
    setShowText(true)
    if (!user.sub || user.sub.trim() === '') {
      setShowText((prevShowText) => {
        window.location.href = `/signin?showText=${prevShowText}&productId=${id}`;
        return prevShowText;
      });
>>>>>>> cf75e18 (agregando leyenda login)
    } else {
      // Si el usuario ya ha iniciado sesión, redirige a la página de reservas
      navigate(`/reservas/${id}`);
    }
<<<<<<< HEAD
  };

  if (!state.currentProduct) {
    return <div>Loading...</div>;
  }

  const { category, name, brand, price, description, images } = state.currentProduct;

=======
  }

>>>>>>> cf75e18 (agregando leyenda login)
  return (
    <div className='Details'>
      <ProductDetail
        key={id}
        categoria={category}
        nombre={name}
        marca={brand}
        precio={price}
        descripcion={description}
        caracteristicas={description}
        imagenes={images}
      />
      <CardPolicy />
      <div className="text-center">
        <button onClick={handleOnClickReserva} className='btn btn-primary mt-3'>
          Ir a Reservas
        </button>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default ProductDetails;
=======
  )
}
>>>>>>> cf75e18 (agregando leyenda login)
