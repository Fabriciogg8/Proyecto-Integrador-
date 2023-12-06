import {Link} from 'react-router-dom'
import '../../styles/Product-Detail.css'
import ShareButton from '../ShareButton'
import prod from '/producto1.jpg'
import { BsArrowLeft } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ImageSlider from './ImageSlider'
import {useState} from 'react'
import WhatsappButton from '../WhatsappButton'
import ScoreProduct from '../product/ScoreProduct'
import ShowScores from '../product/ShowScores'
import { Rating } from 'react-simple-star-rating'

export const ProductDetail = ({
  categoria,
  nombre,
  marca,
  precio,
  descripcion,
  id,
  rating,
  ratingCount
}) => {
    const [showG, setShowG] = useState(null);
    const showGallery = (showG) =>{
        setShowG(showG);
      };
      const data = [
        {
          image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
      ];
  return (
    <div className='everyDetail'>
      <section className='top-section'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='text-start'>
            <h1 className='mb-0'>{nombre}</h1>
            <p className='title-a mb-0'>{categoria}</p>
          </div>
          <div className='text-start-second'>
            <ShareButton name={nombre} description={descripcion} image={prod}/>
            <button className='btn btn-light'>
              <Link to='/'>
                <BsArrowLeft className='iconBack' />
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div>
       
      <div className='contenedorGalery'>
                <div className='galeryContainer g-container'>
                    <img src={prod} className='prodDetailGallery' alt="" onClick={() => showGallery(true)}/>
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                    <img src={prod} className='prodDetailGallery' alt="" />
                </div>
            </div>
            
            { <ImageSlider slides={data} show={showG} /> }
            

        <section className='descripYCaract'>
          <div className='rating-ratingCount'>
            <span>
              Valoraciones recibidas:
              <span>{ratingCount}</span>
            </span>
            <Rating initialValue={rating} size={36} readonly allowFraction/>
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
                style={{ marginRight: '10px' }}
              />
              Marca: {marca}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: '10px' }}
              />
              Precio: {precio}
            </p>
          </div>
          <ScoreProduct id={id}/>
        </section>
        <WhatsappButton/>
        <ShowScores id={id}/>
      </div>
    </div>
  )
}


export default ProductDetail;
