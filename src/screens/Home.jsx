import '../styles/Home.css'
import CardCategory from '../components/CardCategory'
import CardProduct from '../components/CardProduct'
import Buscador from '../components/Buscador'
import BrandSlider from '../components/BrandSlider'
import { useGlobalContext } from '../components/global.context';


const Home = () => { 
    const {apiState} =  useGlobalContext();

  return ( 
    <>
    <Buscador/>

      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row cardsContainers">
        <CardCategory/>
        <CardCategory/>
        <CardCategory/>
        <CardCategory/>
        </div>
    </div>

    <div className='titulosCategorias'>
      <h3>Recomendaciones</h3>
    </div>


    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row cardsContainers">
      {apiState.length
        ? apiState.map((instrumento) => {
            
            return (
                <CardProduct key={instrumento.id} id={instrumento.id} name={instrumento.name} price={instrumento.price}/>
            );
          })
        : null}

      </div>
    </div>

    <BrandSlider/>

    </>
  )
}

export default Home
