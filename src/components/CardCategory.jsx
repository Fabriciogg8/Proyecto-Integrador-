import '../styles/Cards.css'
import logo from '../assets/logo-sinLetrasFondo.png'

import guitarras from '../assets/guitarras.jpg'


function CardCategory() {

  return (
    <>
      
      <div className="col-md-3 card-space">
          <div className="card text-center bg-dark animate__animated animate__fadeInUp">
                <div className="overflow">
                  <img src={guitarras} alt="a wallpaper" className="card-img-top" />
                </div>
            </div>
          </div>
     
    </>
  )
}

export default CardCategory