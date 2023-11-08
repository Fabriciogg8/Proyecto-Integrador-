import { Link } from 'react-router-dom'
import '../../styles/Cards.css'
import producto from '/producto1.jpg'

function CardProduct({id, name, price }) {
  return (
    <>
      <Link
        to={`/productDetails/${id}`}
        className='col-lg-4 col-md-6 col-sm-12 card-space'
      >
        <div className='card text-center bg-dark animate__animated animate__fadeInUp card-hover-effect'>
          <div className='overflow'>
            <img
              src={producto}
              alt=''
              className='card-img-top imgCardProducto'
            />
          </div>
          <div className='text-light'>
            <p className='card-title'>{name}</p>
            <p>USD {price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default CardProduct
