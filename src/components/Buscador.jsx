import logo from '../assets/logo-sinLetrasFondo.png'
import '../styles/Buscador.css'

function Buscador() {

  return (
    <>
      
        <div className="text-center contenedorBuscador">
          <div className="container py-5">
            <div><img src={logo} alt="logo marca" className='logo-buscador' /></div>
          <h1 className="">Notas Prestadas</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar..."/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
              </div>
          </div>
        </div>
      



     
    </>
  )
}

export default Buscador