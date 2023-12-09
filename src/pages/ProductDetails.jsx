import { useNavigate,useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../conexts/ProductContext'
import CardPolicy from '../components/product/CardPolicy'
import  ProductDetail  from "../components/product/ProductDetail"
import { useAuthStore } from '../hooks/useAuthStore'

export const ProductDetails = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const { user } = useAuthStore()
  const navigate = useNavigate();

  useEffect(() => {
    fetchCurrentProduct(id);
  }, [id, fetchCurrentProduct]);

  const handleOnClickReserva = async () => {
    if (!user.sub || user.sub.trim() === '') {
      // Si el usuario no ha iniciado sesión, redirige al formulario específico para reservas
      navigate('/signinReserva');}
  if (!state.currentProduct) {
    return <div>Loading...</div>;
  }
}
  const { category, name, brand, price, description, images } = state.currentProduct;

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
  );
};

export default ProductDetails
