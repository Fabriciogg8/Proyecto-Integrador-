import '../styles/Cards.css'

import guitarras from '../assets/guitarras.jpg'


function CardProduct() {

  return (
    <>
      
      <div className="col-md-4 card-space">
          <div className="card text-center bg-dark animate__animated animate__fadeInUp">
                <div className="overflow">
                  <img src={guitarras} alt="a wallpaper" className="card-img-top" />
                </div>
                <div className="text-light">
                  <p className="card-title">Guitarra clasica Alhambra 1C black satin</p>
                <h6>USD/H 10</h6>
                </div>
            </div>
          </div>
     
    </>
  )
}

export default CardProduct