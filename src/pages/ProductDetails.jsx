import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ProductDetail } from '../components/product/ProductDetail'
import { ProductContext } from '../conexts/ProductContext'

export const ProductDetails = () => {
  const { id } = useParams()
  const { currentProduct, fetchCurrentProduct } = useContext(ProductContext)

  useEffect(() => {
    fetchCurrentProduct(id)
  }, [])

  const producto = currentProduct

  console.log(producto)

  return (
    <ProductDetail
      key={producto.id}
      categoria={producto.categoria}
      nombre={producto.nombre}
      marca={producto.marca}
      color={producto.color}
      material={producto.material}
      precio={producto.precio}
      descripcion={producto.descripcion}
      caracteristicas={producto.caracteristicas}
    />
  )
}
