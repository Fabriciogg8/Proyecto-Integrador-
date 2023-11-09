import { Table, Button } from 'react-bootstrap'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../../conexts/ProductContext'
import { DELETE_PRODUCT } from '../../helpers/endpoints'

export const ProductList = () => {

    const { products, fetchProducts } = useContext(ProductContext)

    useEffect(() => {
      fetchProducts()
    }, [])


  const instrumentos = products

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
    </div>
  )
}
