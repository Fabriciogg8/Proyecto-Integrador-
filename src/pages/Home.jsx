import '../styles/Home.css'
import { Container } from 'react-bootstrap'
import CardCategory from '../components/CardCategory'
import CardProduct from '../components/CardProduct'
import Buscador from '../components/Buscador'
import BrandSlider from '../components/BrandSlider'
import { useGlobalContext } from '../components/global.context';


const Home = () => { 
    const {apiState} =  useGlobalContext();

  return (
    <>
      <Container>
        <Buscador />

        <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row cardsContainers'>
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </div>
        </div>

        <div className='titulosCategorias'>
          <h3>Recomendaciones</h3>
        </div>

        <div className='container d-flex justify-content-center align-items-center h-100'>
          <div className='row cardsContainers'>
            {apiState.length
              ? apiState.map(instrumento => {
                  return (
                    <CardProduct
                      key={instrumento.id}
                      id={instrumento.id}
                      name={instrumento.name}
                      price={instrumento.price}
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
