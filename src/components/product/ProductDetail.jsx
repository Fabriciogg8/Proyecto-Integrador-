import '../../styles/Product-Detail.css'
import ShareButton from '../ShareButton'
import { BsArrowLeft } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import WhatsappButton from '../WhatsappButton'

import { USER_FAVORITES } from '../../helpers/endpoints'
import { useAuthStore } from '../../hooks/useAuthStore'

import ScoreProduct from '../product/ScoreProduct'
import ShowScores from '../product/ShowScores'
import { Rating } from 'react-simple-star-rating'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const ProductDetail = ({
  categoria,
  nombre,
  marca,
  precio,
  descripcion,
  id,
  imagenes,
  rating,
  ratingCount
}) => {


  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }
  const [showG, setShowG] = useState(null);
  const showGallery = (showG) => {
    setShowG(showG);
  };
  const data = imagenes;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  if (!Array.isArray(imagenes) || data.length <= 0) {
    return null;
  }
  //----------------------------------------------
  const [favs, setFavs] = useState([]);

  const token = localStorage.getItem('token')
  const getData = async () => {
    try {
      const response = await fetch(`${USER_FAVORITES}?userEmail=${user.sub}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      setFavs(data)
    } catch (error) {
      console.error("Error al obtener datos en el coso:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='everyDetail'>
      <section className='top-section'>
        <div className='d-flex justify-content-between align-items-center detailHeader'>
          <div className='text-start'>
            <h1 className='mb-0'>{nombre}</h1>
            <p className='title-a mb-0'>{categoria}</p>

          </div>
          <div className='text-start-second'>
            <ShareButton name={nombre} description={descripcion} image={prod} />
            <button className='btn btn-light'>
              <Link to='/'>
                <BsArrowLeft className='iconBack' />
              </Link>
            </button>
          </div>
        </div>
        {favs.map(fav => (
          fav.id == id ? <div className='favHead'><small>Éste producto se encuentra en tus favoritos ❤️</small></div> : ""
        ))}
      </section>
      <div>


        <div className='everyDetail'>
          {nombre && (
            <><section className='top-section'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='text-start'>
                  <h1 className='mb-0'>{nombre}</h1>
                  <p className='title-a mb-0'>{categoria}</p>
                </div>
                <div className='text-start-second'>
                  <ShareButton name={nombre} description={descripcion} image={prod} />
                  <button className='btn btn-light' onClick={navigateBack}>
                    <BsArrowLeft className='iconBack' />
                  </button>
                </div>
              </div>
            </section>
              <div>

                <div className='contenedorGalery'>
                  <div className='galeryContainer g-container'>
                    {imagenes.map((imagen, index) => (<img key={index} src={imagen} className='prodDetailGallery' alt="" onClick={() => showGallery(true)} />)
                    )}

                  </div>
                </div>

                <section className='sliderContainer' style={showG ? { display: "block" } : { display: "none" }}>
                  <p className='closeGallery' onClick={() => showGallery(false)}>&times;</p>
                  <div className='slider'>

                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

                    {imagenes.map((slide, index) => {
                      return (
                        <div
                          className={index === current ? 'slide active' : 'slide'}
                          key={index}
                        >
                          {index === current && (
                            <img src={slide} alt='travel image' className='image' />
                          )}

                        </div>
                      );
                    })}
                  </div>
                </section>


                <section className='descripYCaract'>
                  <div className='rating-ratingCount'>
                    <span>
                      Valoraciones recibidas:
                      <span>{ratingCount}</span>
                    </span>
                    <Rating initialValue={rating} size={36} readonly allowFraction />
                  </div>
                  <div className='descripcionProd'>
                    <h4>Detalles</h4>
                    <p>{descripcion}</p>
                  </div>
                  <div className='caracteristicasProd'>
                    <h4>Caracteristicas</h4>
                    <hr />
                    <p>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        style={{ marginRight: '10px' }} />
                      Marca: {marca}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        style={{ marginRight: '10px' }} />
                      Precio: {precio}
                    </p>
                  </div>
                  <ScoreProduct id={id} />
                </section>
                <WhatsappButton />
                <ShowScores id={id} />
              </div></>
          )}

        </div>
      </div>
    </div>)

}
export default ProductDetail;
