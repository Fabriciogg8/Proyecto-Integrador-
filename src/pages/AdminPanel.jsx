import { Link, Routes, Route } from 'react-router-dom'
import ProductCreate from '../components/product/ProductCreate'
import { ProductList } from '../components/product/ProductListAdmin'

export const AdminPanel = () => {
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      return (
        <div className='flex align-items-center justify-content-center'>
          <h1 className='text-center'>No disponible en dispositivos móviles</h1>
        </div>
      ) 
    }

  return (
    <div className='container-fluid admin-panel vh-100'>
      <div className='row h-100'>
        <aside className='col-3 bg-dark text-light p-4'>
          <nav>
            <p>Listado Permisos Administrador</p>
            <ul className='list-unstyled'>
              <li>
                <Link to='ver-productos' className='text-light'>
                  Ver Productos
                </Link>
              </li>
              <li>
                <Link to='crear-producto' className='text-light'>
                  Crear Producto
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className='col-9 p-4' style={{ backgroundColor: '#d8c690' }}>
          <Routes>
            <Route path='/' element={null}/>
            <Route path='ver-productos' element={<ProductList />} />e
            <Route path='crear-producto' element={<ProductCreate />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

