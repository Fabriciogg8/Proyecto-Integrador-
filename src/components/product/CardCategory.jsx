import '../../styles/Cards.css'

import guitarras from '/guitarras.jpg'

function CardCategory({name, onClick}) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 card-space'>
      <div className='card text-center bg-dark animate__animated animate__fadeInUp m-3' onClick={() => onClick(name)}>
        <div className='overflow-Category'>
          {/* <img src={guitarras} alt='a wallpaper' className='card-img-top' /> */}
          <h5 className='card-titleCategory'>{name}</h5>
        </div>
      </div>
    </div>
  )
}

export default CardCategory;
