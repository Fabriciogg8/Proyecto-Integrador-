import '../styles/Cards.css'

import guitarras from '/guitarras.jpg'

function CardCategory() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 card-space'>
      <div className='card text-center bg-dark animate__animated animate__fadeInUp m-3'>
        <div className='overflow'>
          <img src={guitarras} alt='a wallpaper' className='card-img-top' />
        </div>
      </div>
    </div>
  )
}

export default CardCategory
