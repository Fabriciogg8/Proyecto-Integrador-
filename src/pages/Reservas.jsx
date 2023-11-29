import ProductDetail from '../components/product/ProductDetail'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../conexts/ProductContext'
import {DetalleReserva} from '../components/forms/DetalleReserva'

export const Reservas = () => {
    const { id } = useParams()

  const { state, fetchCurrentProduct } = useContext(ProductContext)

  useEffect(() => {
    fetchCurrentProduct(id)
  }, []);
  const producto = state.currentProduct;

  return(
    <div className='reservas'>
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
      <DetalleReserva/>
    </div>
)}
