import { Table, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../conexts/ProductContext'
import { DELETE_PRODUCT,GET_CURRENT_PRODUCT } from '../../helpers/endpoints'

import Pagination from '../Pagination'

import { Link } from 'react-router-dom'

export const ProductList = () => {
  const { fetchProducts } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [productos, setProductos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
  
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

  const handleEdit = id => {
    // Lógica para editar el producto con el ID dado
    console.log(`Editar producto con ID ${id}`)
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
        console.log(response);
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
                <Link to='update-producto'>
                  <Button
                    variant='secondary'
                    onClick={() => handleEdit(instrumento.id)}
                    className='mx-2'
                  >
                    Editar
                  </Button>
                </Link>
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
