import '../styles/AdministrationCard.css'
//import producto from '../assets/producto1.jpg'
import { ProductContext } from '../conexts/ProductContext'
import { GET_ALL_CATEGORIES } from '../helpers/endpoints'
import { useContext, useEffect, useState } from 'react'

function CategoryProduct() {
  const { products, fetchProducts } = useContext(ProductContext)
  const [categories, setCategories] = useState([]);

  

  const getCategories = () => {
    fetch(GET_ALL_CATEGORIES)
      .then(response => response.json())
      .then(json => setCategories(json))
      .catch(error => console.error(error));
  };


  useEffect(() => {
    fetchProducts()
  }, [])

  const instrumentos = products
 
  console.log(instrumentos)

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <>
        <div className="col-md-8 card-space administrationCardContainer">
        <div className="card text-center administration-card">
                <div className="text-light">
                  <h2 className="card-title">Asignar Categoría</h2>
                    <div className='inputsCardContainer'>
                        <select className="form-select" name="selectProductos" id="selectProductos" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione un instrumento existente...</option>
                            {instrumentos.map(instrumento => (
                              <option value={instrumento.id}>{instrumento.name}</option>
                            ))}
                            
                        </select>
                        <select className="form-select" name="selectCategoria" id="selectCategoria" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {categories.map(categoria => (
                              <option value={categoria.name}>{categoria.name}</option>
                            ))}
                            
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