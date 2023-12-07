import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../conexts/ProductContext'
import CardPolicy from '../components/product/CardPolicy'
import  ProductDetail  from "../components/product/ProductDetail"
import { Link } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore'

export const ProductDetails = () => {
  const { id } = useParams()

  const { state, fetchCurrentProduct } = useContext(ProductContext)

  useEffect(() => {
    fetchCurrentProduct(id)
  }, []);

  const producto = state.currentProduct

  const { user } = useAuthStore();

  const handlerOnClickReserva = () =>{
    if (!user.sub || user.sub.trim() === '') {
      window.location.href = '/signin';
    } else {
      window.location.href = `/reservas/${id}`;
    }
    
  }

  console.log(producto)

  return (
    <div className='Details'>
      <ProductDetail
        key={producto.id}
        categoria={producto.category}
        nombre={producto.name}
        marca={producto.brand}
        precio={producto.price}
        descripcion={producto.description}
        caracteristicas={producto.description}
        imagenes={producto.images}
      />
      <CardPolicy/>
      <div className="text-center">
        <button onClick={handlerOnClickReserva} className='btn btn-primary mt-3'>
          Ir a Reservas
        </button>
      </div>
    </div>
  )
}


