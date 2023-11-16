import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductDetail } from '../components/product/ProductDetail.jsx'
import { ProductContext } from '../conexts/ProductContext'

export const ProductDetails = () => {
  const { id } = useParams()
  const { currentProduct, fetchCurrentProduct } = useContext(ProductContext)

  useEffect(() => {
    fetchCurrentProduct(id)
  }, []);

  const producto = currentProduct

  console.log(producto)

  return (
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
  )
}
