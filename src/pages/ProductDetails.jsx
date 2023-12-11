import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../conexts/ProductContext'
import { useReservaContext } from '../conexts/ReservaContext'
import CardPolicy from '../components/product/CardPolicy'
import ProductDetail from '../components/product/ProductDetail'
import { useAuthStore } from '../hooks/useAuthStore'
import Swal from 'sweetalert2';

export const ProductDetails = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const { startDate, endDate } = useReservaContext()

  useEffect(() => {
    fetchCurrentProduct(id)
  }, [])

  const handleOnClickReserva = async () => {
    if (!user.sub || user.sub.trim() === '') {
      // Si el usuario no ha iniciado sesión, redirige al formulario específico para reservas
      if (startDate && endDate) {
        navigate('/signinReserva')
      }
      else{
        Swal.fire('Por favor, selecciona la fecha antes de continuar con la reserva.');
        navigate('/home');
      }
    }
    else{
  /**Verifica antes de avanzar sobre la reserva si se seleccionaron las fechas**/
    if (startDate && endDate) {
      navigate(`/reservas/${id}`);
     } else {
      Swal.fire('Por favor, selecciona la fecha antes de continuar con la reserva.');
      navigate('/home');
    }

  }
  if (!state.currentProduct) {
    return <div>Loading...</div>
  }
  const product = state.currentProduct

  return (
    <div className='Details'>
      <ProductDetail
        key={product.id}
        categoria={product.category}
        nombre={product.name}
        marca={product.brand}
        precio={product.price}
        descripcion={product.description}
        caracteristicas={product.characteristics}
        imagenes={product.images}
        rating={product.rating}
        ratingCount={product.ratingCount}
        id={product.id}
      />
      <CardPolicy />
      <div className='text-center'>
        <button onClick={handleOnClickReserva} className='btn btn-primary mt-3'>
          Ir a Reservas
        </button>
      </div>
    </div>
  )
}
}
export default ProductDetails
