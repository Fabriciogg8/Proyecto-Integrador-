import { useParams } from 'react-router-dom'
import { ProductDetail } from '../components/product/ProductDetail'

export const ProductDetails = () => {
  const { id } = useParams()

  const producto = {
    id: id,
    categoria: 'Instrumentos de Cuerda',
    nombre: 'Guitarra Acústica',
    marca: 'Fender',
    color: 'Natural',
    material: 'Madera de Cedro',
    precio: 799.99,
    descripcion:
      'Una guitarra acústica de alta calidad adecuada para músicos principiantes y profesionales. Ofrece un sonido rico y cálido con una excelente resonancia. Fabricada con materiales duraderos y seleccionados para brindar una experiencia musical excepcional.',
  }

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
