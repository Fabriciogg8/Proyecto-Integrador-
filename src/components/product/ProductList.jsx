import { Table, Button } from 'react-bootstrap'

export const ProductList = () => {
  const instrumentos = [
    { id: 1, name: 'Guitarra Acústica', price: 299 },
    { id: 2, name: 'Batería Completa', price: 899 },
    { id: 3, name: 'Teclado Eléctrico', price: 399 },
    { id: 4, name: 'Bajo Eléctrico', price: 249 },
    { id: 5, name: 'Flauta Travesera', price: 99 },
    { id: 6, name: 'Violín', price: 199 },
    { id: 7, name: 'Saxofón', price: 349 },
    { id: 8, name: 'Trompeta', price: 179 },
    { id: 9, name: 'Piano de Cola', price: 1899 },
    { id: 10, name: 'Acordeón', price: 599 },
    { id: 11, name: 'Ukelele', price: 79 },
    { id: 12, name: 'Harmónica', price: 29 },
    { id: 13, name: 'Tambor', price: 69 },
    { id: 14, name: 'Maracas', price: 19 },
    { id: 15, name: 'Clarinete', price: 279 },
  ]

  const handleEdit = id => {
    // Lógica para editar el producto con el ID dado
    console.log(`Editar producto con ID ${id}`)
  }

  const handleDelete = id => {
    // Lógica para eliminar el producto con el ID dado
    console.log(`Eliminar producto con ID ${id}`)
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
