import '../styles/Cards.css'
import { Link } from "react-router-dom";
import producto from '../assets/producto1.jpg'


function CardProduct({id, name, price}) {

  return (
    <>
      
      <div className="col-md-6 card-space">
          <div className="card text-center bg-dark animate__animated animate__fadeInUp">
                <div className="overflow">
                <Link to={`/products/${id}`}> 
                  <img src={producto} alt="" className="card-img-top imgCardProducto" />
                </Link>
                </div>
                <div className="text-light">
                  <p className="card-title">{name}</p>
                <h6>${price}</h6>
                </div>
            </div>
          </div>

     
    </>
  )
}

export default CardProduct