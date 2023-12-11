import { Table, Button } from 'react-bootstrap'
import { useContext, useEffect, useState} from 'react'
import { ProductContext } from '../../conexts/ProductContext'
import { DELETE_PRODUCT, GET_ALL_CATEGORIES, GET_CURRENT_PRODUCT, EDIT_PRODUCT, GET_CHARACTERISTIC } from '../../helpers/endpoints'
import Modal from 'react-bootstrap/Modal'
import '../../styles/ModalEditProd.css'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
 
export const ProductList = () => {
  const { state, fetchProducts, fetchCurrentProduct } = useContext(ProductContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [productos, setProductos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
  
  const token = localStorage.getItem('token');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${GET_CURRENT_PRODUCT}?page=${currentPage}`);
          const data = await response.json();
          setProductos(data.content);
          setTotalPages(data.totalPages);
          } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, [currentPage]);
    
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const goToFirstPage = () => {
      setCurrentPage(1);
    };
  

  const instrumentos = productos


  const [categories, setCategories] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  const getCategories = () => {
    fetch(GET_ALL_CATEGORIES)
      .then(response => response.json())
      .then(json => setCategories(json))
      .catch(error => console.error(error));
  };

  const getCharacteristics = async () => {
    try {
        const response = await fetch(GET_CHARACTERISTIC, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`
            },
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        setCharacteristics(data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

  useEffect(() => {
    getCategories();
    getCharacteristics();
  }, []);


  //----editar prdo--------

  const handleEditProduct = async (event) => {
    event.preventDefault();
      const formData = new FormData();
      formData.append('name', event.target.newName.value);
      formData.append('category', event.target.newCategory.value);
      formData.append('brand', event.target.newBrand.value);
      formData.append('model', event.target.newModel.value);
      formData.append('newCharacteristicFirst', event.target.newCharacteristicFirst.value);
      formData.append('newCharacteristicSecond', event.target.newCharacteristicFirst.value);
      formData.append('newCharacteristicThird', event.target.newCharacteristicFirst.value);
      formData.append('newCharacteristicFourth', event.target.newCharacteristicFirst.value);

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
        const response = await fetch(`${DELETE_PRODUCT}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        console.log(response);
        if(window.location.href.includes("ver-productos")){
          window.location.reload()
        }
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
                            {categories.map((categoria, index) => (
                              <option key={index} value={categoria.name}>{categoria.name}</option>
                            ))}
                            
                        </select>
            </div>
            <div className='modalInputs'>
            <span>Primer Característica</span>
            <select className="form-select" name="newCharacteristicFirst" id="newCharacteristicFirst" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {characteristics.map((characteristic, index) => (
                              <option key={index} value={characteristic.name}>{characteristic.name}</option>
                            ))}
                        </select>
            </div>
            <div className='modalInputs'>
            <span>Segunda Característica</span>
            <select className="form-select" name="newCharacteristicSecond" id="newCharacteristicSecond" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {characteristics.map((characteristic, index) => (
                              <option key={index} value={characteristic.name}>{characteristic.name}</option>
                            ))}
                        </select>
            </div>
            <div className='modalInputs'>
            <span>Tercer Característica</span>
            <select className="form-select" name="newCharacteristicThird" id="newCharacteristicThird" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {characteristics.map((characteristic, index) => (
                              <option key={index} value={characteristic.name}>{characteristic.name}</option>
                            ))}
                        </select>
            </div>
            <div className='modalInputs'>
            <span>Cuarta Característica</span>
            <select className="form-select" name="newCharacteristicFourth" id="newCharacteristicFourth" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT" disabled>Seleccione una categoria...</option>
                            {characteristics.map((characteristic, index) => (
                              <option key={index} value={characteristic.name}>{characteristic.name}</option>
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

      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />

    </div>
  )
}
