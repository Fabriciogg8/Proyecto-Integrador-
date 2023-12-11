import ProductDetail from '../components/product/ProductDetail'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../conexts/ProductContext'
import { DetalleReserva } from '../components/forms/DetalleReserva'
import '../styles/Reservas.css'

export const Reservas = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const producto = state.currentProduct
  useEffect(() => {
    fetchCurrentProduct(id)
  }, [])

    return (
      <div className='reservas'>
        <div className='row align-items-center'>
          <div className='col-md-4 sub'>
            {/* Formulario de reserva */}
            <DetalleReserva />
          </div>
          <div className='col-md-8 reservasProducto'>
            {/* Detalles del producto */}
            <ProductDetail
              key={producto.id}
              categoria={producto.category}
              nombre={producto.name}
              marca={producto.brand}
              precio={producto.price}
              descripcion={producto.description}
              caracteristicas={producto.characteristics}
              imagenes={producto.images}
            />
          </div> 
         </div>
      </div>
  )
}

export default Reservas
