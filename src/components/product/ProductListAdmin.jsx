import { Table, Button } from 'react-bootstrap'
import { useContext, useEffect, useState} from 'react'
import { ProductContext } from '../../conexts/ProductContext'
import { DELETE_PRODUCT } from '../../helpers/endpoints'
import Modal from 'react-bootstrap/Modal'
import '../../styles/ModalEditProd.css'
import { EDIT_PRODUCT } from '../../helpers/endpoints';
import { GET_ALL_CATEGORIES } from '../../helpers/endpoints'

export const ProductList = () => {
  const token = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { state, fetchProducts, fetchCurrentProduct } = useContext(ProductContext)
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


  //----editar prdo--------

  const handleEditProduct = async (event) => {
    event.preventDefault();
      const formData = new FormData();
      formData.append('name', event.target.newName.value);
      formData.append('category', event.target.newCategory.value);
      formData.append('brand', event.target.newBrand.value);
      formData.append('model', event.target.newModel.value);
      if(event.target.newDescription.value == "" || event.target.newDescription.value == null){
        formData.append('description', producto.description);
      }else{
        formData.append('description',event.target.newDescription.value);
      }
      formData.append('price', event.target.newPrice.value);
    

    var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", `Bearer ${token}`);
      try {
        /*var raw = JSON.stringify({
          "category": event.target.selectCategoria.value,
        });*/
      
       
       const response = await fetch(`${EDIT_PRODUCT}/${producto.id}`, {
          method: 'PUT',
          headers: myHeaders,
          body:formData,

        });
        console.log(response)
        handleClose();
        //fetchProducts();
      } catch (error) {
        alert('Error al asignarle una nueva categoria a el producto', error);
        console.error('Error al asignarle una nueva categoria a el producto', error);
      }
  }

  //-----------
  const producto = state.currentProduct
  const handleEdit = id => {
    // Lógica para editar el producto con el ID dado
    fetchCurrentProduct(id)
    handleShow()
  }

  

  const handleDelete = async id => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este producto?');

    if (confirmDelete) {
      try {
        const response = await fetch((`${DELETE_PRODUCT}/${id}`), {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        });
        console.log(response)
        fetchProducts();
      } catch (error) {
        console.error('Error al eliminar el producto', error);
      }
    }
    
  }
  return (

    

    <div style={{ backgroundColor: '#d8c690' }}>
      <h1 className='text-center' style={{ color: 'black' }}>
        Lista de Productos
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {instrumentos.map(instrumento => (
            <tr key={instrumento.id}>
              <td>{instrumento.id}</td>
              <td>{instrumento.name}</td>
              <td>
              
                <Button
                  variant='secondary'
                  onClick={() => handleEdit(instrumento.id)}
                  className='mx-2'
                >
                  Editar
                </Button>
              
                <Button
                  variant='danger'
                  onClick={() => handleDelete(instrumento.id)}
                  className='mx-2'
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

        

      </Table>

<Modal show={show} onHide={handleClose}>
      <form onSubmit={handleEditProduct} >
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='modalInputsTitle'>
            <span>Actual</span>
            <span>Asignar</span>
            </div>

            <div className='modalInputs'>
            <span>{producto.name + " "}</span>
            <input type="text" name="newName" id="newName" placeholder='Nuevo Nombre'/>
            </div>

            <div className='modalInputs'>
            <span>{producto.category + " "}</span>
            <select className="form-select" name="newCategory" id="newCategory" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {categories.map(categoria => (
                              <option value={categoria.name}>{categoria.name}</option>
                            ))}
                            
                        </select>
            
            </div>

            <div className='modalInputs'>
            <span>{producto.brand + " "}</span>
            <input type="text" name="newBrand" id="newBrand" placeholder='Nueva Marca'/>
            </div>

            <div className='modalInputs'>
            <span>{producto.model + " "}</span>
            <input type="text" name="newModel" id="newModel" placeholder='Nuevo Modelo'/>
            </div>

            <div className='modalInputs'>
            <span>{producto.price + " "}</span>
            <input type="number" name="newPrice" id="newPrice" placeholder='Nuevo Precio'/>
            </div>

            <div className='modalInputs'>
            <textarea name="newDescription" id="newDescription" placeholder='Nueva Descripcion...'/>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          
        </Modal.Footer>
        </form>
      </Modal>
    
    </div>
  )
}
