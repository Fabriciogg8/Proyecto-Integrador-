import '../styles/Home.css'
import { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CardCategory from '../components/product/CardCategory'
import CardProduct from '../components/product/CardProduct'
import Buscador from '../components/buscador/Buscador'
import BrandSlider from '../components/buscador/BrandSlider'
import { ProductContext } from '../conexts/ProductContext'

const Home = () => {
  const { products, fetchProducts } = useContext(ProductContext)

  useEffect(() => {
    fetchProducts()
  }, [])


  const instrumentos = products

  const categorias = [
    { id: 1, name: 'Guitarras', img: 'url_guitarras.jpg' },
    { id: 2, name: 'Instrumentos de viento', img: 'url_viento.jpg' },
    { id: 3, name: 'Teclados', img: 'url_teclados.jpg' },
    { id: 4, name: 'Instrumentos de cuerda', img: 'url_cuerda.jpg' },
    { id: 5, name: 'Baterías y percusión', img: 'url_percusion.jpg' },
    {
      id: 6,
      name: 'Instrumentos de viento metal',
      img: 'url_viento_metal.jpg',
    },
    { id: 7, name: 'Instrumentos eléctricos', img: 'url_electricos.jpg' },
    { id: 8, name: 'Instrumentos de orquesta', img: 'url_orquesta.jpg' },
    { id: 9, name: 'Accesorios musicales', img: 'url_accesorios.jpg' },
  ]

  return (
    <>
      <Container>
        <Buscador />
        <div className='card-container d-flex flex-row overflow-auto justify-content-start'>
          {' '}
          {categorias.length
            ? categorias.map(categoria => (
                <CardCategory
                  key={categoria.id}
                  name={categoria.name}
                  img={categoria.img}
                />
              ))
            : null}
        </div>

        <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row cardsContainers'>
            {instrumentos.length
              ? instrumentos.map(instrumento => {
                const imagen =
                  instrumento.images && instrumento.images.length > 0
                    ? instrumento.images[0]
                    : null
                  return (
                    <CardProduct
                      key={instrumento.id}
                      id={instrumento.id}
                      name={instrumento.name}
                      price={instrumento.price}
                      image={imagen}
                    />
                  )
                })
              : null}
          </div>
        </div>
        <BrandSlider />
      </Container>
    </>
  )
}

export default Home
