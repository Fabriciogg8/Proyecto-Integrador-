import '../styles/Home.css'
import { Container } from 'react-bootstrap'
import CardCategory from '../components/CardCategory'
import CardProduct from '../components/CardProduct'
import Buscador from '../components/Buscador'
import BrandSlider from '../components/BrandSlider'

import ProductList from '../components/ProductList'


const Home = () => {
  const instrumentos = [
    { id: 1, name: 'Guitarra Acústica', price: 299 },
    { id: 2, name: 'Batería Completa', price: 899 },
    { id: 3, name: 'Teclado Eléctrico', price: 399 },
    { id: 4, name: 'Bajo Eléctrico', price: 249 },
    { id: 5, name: 'Flauta Travesera', price: 99 },
    { id: 6, name: 'Violín', price: 199 },
    { id: 7, name: 'Saxofón', price: 349 },
    { id: 8, name: 'Trompeta', price: 179 },
    { id: 9, name: 'Piano de Cola', price: 1899 },
    { id: 10, name: 'Acordeón', price: 599 },
    { id: 11, name: 'Ukelele', price: 79 },
    { id: 12, name: 'Harmónica', price: 29 },
    { id: 13, name: 'Tambor', price: 69 },
    { id: 14, name: 'Maracas', price: 19 },
    { id: 15, name: 'Clarinete', price: 279 },
  ]

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
  {/* Utilizar ProductList con la lista de instrumentos */}
  <ProductList products={instrumentos} />
</div>
<BrandSlider />
</Container>
</>
);
};

export default Home;