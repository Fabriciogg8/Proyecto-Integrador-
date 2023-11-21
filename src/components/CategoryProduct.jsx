import '../styles/AdministrationCard.css'
//import producto from '../assets/producto1.jpg'


function CategoryProduct() {

  return (
    <>
        <div className="col-md-8 card-space administrationCardContainer">
        <div className="card text-center administration-card">
                <div className="text-light">
                  <h2 className="card-title">Asignar Categoría</h2>
                    <div className='inputsCardContainer'>
                        <select className="form-select" name="selectProductos" id="selectProductos">
                            <option value="DEFAULT" disabled>Seleccione un instrumento existente...</option>
                            <option value="Guitarra">Guitarra</option>
                            <option value="Bajo">Bajo</option>
                            <option value="Piano">Piano</option>
                        </select>
                        <select className="form-select" name="selectCategoria" id="selectCategoria">
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            <option value="Guitarra">Cuerda</option>
                            <option value="Bajo">Vientos</option>
                            <option value="Piano">Electronico</option>
                        </select>
                    </div>
                    <button className='btn btn-warning'>Asignar</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryProduct