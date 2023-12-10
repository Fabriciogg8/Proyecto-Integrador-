import { Link, Routes, Route } from 'react-router-dom'
import ProductCreate from '../components/product/ProductCreate'
import CreateCategory from '../components/category/CreateCategory'
import CategoryProduct from '../components/CategoryProduct'
import { ProductList } from '../components/product/ProductListAdmin'
import '../styles/Panel.css'
import { useAuthStore } from '../hooks/useAuthStore'

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
    <div className='container-fluid admin-panel'>
      <div className='row'>
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
              <li>
                <Link to='crear-categoria' className='text-light'>
                  Agregar Categoría
                </Link>
              </li>
              <li>
                <Link to='asignar-categoria' className='text-light'>
                  Asignar Categoría
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className='col-9 p-4'>
          <Routes>
            <Route path='/' element={<AdminPanelOverview/>}/>
            <Route path='ver-productos' element={<ProductList />} />
            <Route path='crear-producto' element={<ProductCreate />} />
            <Route path='crear-categoria' element={<CreateCategory />} />
            <Route path='asignar-categoria' element={<CategoryProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}



 

const AdminPanelOverview = () => {
  const { status, user, startLogout } = useAuthStore();
  let userName
  if(user){
    userName = `${user.firstName}`
  }

  if (user.role === 'ADMIN') {
    return (
      <div style={{color: "red" }}>
        <p >Bienvenido al panel de administración, {userName}</p>
        <div>
            Resumen:

            
        </div>
      </div>
    )
  }
}