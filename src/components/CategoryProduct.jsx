import '../styles/AdministrationCard.css'
//import producto from '../assets/producto1.jpg'
import { ProductContext } from '../conexts/ProductContext'
import { GET_ALL_CATEGORIES } from '../helpers/endpoints'
import { useContext, useEffect, useState } from 'react'

function CategoryProduct() {
  
  const [selectedProduct, setSelectedProduct] = useState("");
  
  
  const { state, fetchProducts } = useContext(ProductContext)

    useEffect(() => {
      fetchProducts()
    }, [])


  const instrumentos = state.products
  const [categories, setCategories] = useState([]);

  

  const getCategories = () => {
    fetch(GET_ALL_CATEGORIES)
      .then(response => response.json())
      .then(json => setCategories(json))
      .catch(error => console.error(error));
  };


  useEffect(() => {
    getCategories();
  }, []);


  const handleEdit = async (event) => {
    event.preventDefault();
      const formData = new FormData();
      formData.append('category', event.target.selectCategoria.value);
    alert(event.target.selectCategoria.value)
    var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJMZWFuZHJvIiwibGFzdE5hbWUiOiJBZG1pbiIsInJvbGUiOiJBRE1JTiIsInN1YiI6ImxlYW5kcm9AYWRtaW4uY29tIiwiaWF0IjoxNzAxOTkxNTU5LCJleHAiOjE3MDIwNzc5NTl9.k3gGMA2FyMtkYdYQA8CkiLSC8gm5rn-DfOKaGpNDjgU");
      try {
        /*var raw = JSON.stringify({
          "category": event.target.selectCategoria.value,
        });*/
      
        alert(selectedProduct)
       const response = await fetch(`http://174.129.92.139:8001/api/v1/products/${selectedProduct}`, {
          method: 'PUT',
          headers: myHeaders,
          body:formData,

        });
        console.log(response)
        //fetchProducts();
      } catch (error) {
        console.error('Error al asignarle una nueva categoria a el producto', error);
      }
  }


 

  return (
    <>
        <div className="col-md-8 card-space administrationCardContainer">
        <div className="card text-center administration-card">
        <form onSubmit={handleEdit} >

                <div className="text-light">
                  <h2 className="card-title">Asignar Categoría</h2>
                    <div className='inputsCardContainer'>
                        <select className="form-select" name="selectProductos" id="selectProductos" defaultValue={"DEFAULT"}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                        >
                            <option key={0} value="DEFAULT" disabled>Seleccione un instrumento existente...</option>
                            {instrumentos.map(instrumento => (
                              <option value={instrumento.id} key={instrumento.id}>{instrumento.name}</option>
                            ))}
                            
                        </select>
                        <select className="form-select" name="selectCategoria" id="selectCategoria" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {categories.map(categoria => (
                              <option key={categoria.name} value={categoria.name}>{categoria.name}</option>
                            ))}
                            
                        </select>
                    </div>
                    <button className='btn btn-warning' type="submit">Asignar</button>
                </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default CategoryProduct