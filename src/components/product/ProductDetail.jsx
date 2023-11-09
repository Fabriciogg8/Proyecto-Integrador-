import '../../styles/Product-Detail.css'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const ProductDetail = ({
  categoria,
  nombre,
  marca,
  precio,
  descripcion,
  imagenes,
}) => {

  return (
    <div className='everyDetail'>
      <section className='top-section'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='text-start'>
            <h1 className='mb-0'>{nombre}</h1>
            <p className='title-a mb-0'>{categoria}</p>
          </div>
          <div className='text-start'>
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
          <div className='galeryContainer'>
              {imagenes && imagenes.length > 0 ? (
                imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} className='galleryImg' alt='imagen' />
                ))
              ) : (
                <p>No hay imágenes disponibles</p>
              )}
          </div>
        </div>
        <section className='descripYCaract'>
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
        </section>
      </div>
    </div>
  )
}
