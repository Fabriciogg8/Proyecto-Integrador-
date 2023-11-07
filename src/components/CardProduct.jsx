import '../styles/Cards.css'
import producto from '../assets/producto1.jpg'

function CardProduct({ name, price }) {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12 card-space'>
        <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
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
      </div>
    </>
  )
}

export default CardProduct
