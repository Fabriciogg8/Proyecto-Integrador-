import { Link, Routes, Route } from 'react-router-dom'
import ProductCreate from '../components/product/ProductCreate'
import CreateCategory from '../components/category/CreateCategory'
import CategoryProduct from '../components/CategoryProduct'
import { ProductList } from '../components/product/ProductListAdmin'
import '../styles/Panel.css'
import { useAuthStore } from '../hooks/useAuthStore'
import CharacteristicAdmin from '../components/characteristic/CharacteristicAdmin'
import ProductUpdate from '../components/product/ProductUpdate'


export const AdminPanel = () => {
    const isMobile = window.innerWidth < 768
   
    if (isMobile) {
      return (
        <div className='flex align-items-center justify-content-center'>
          <h1 className='text-center'>No disponible en dispositivos móviles</h1>
        </div>
      ) 
    }

    const handleChangeTitle = (e) => {
      const listItems = document.querySelectorAll(".admin-panel-task-item a");
      const selectedItem = e.target;
      listItems.forEach((item) => {
        item.classList.remove("selected-task-item");
      });

      selectedItem.classList.add("selected-task-item");

    }
    
    return (
      <div className='container-fluid admin-panel'>
        <div className='row'>
          <aside className='col-3 text-dark p-4'>
            <nav>
              <h4 className='admin-panel-task-title'>Tareas</h4>
              <ul className='list-unstyled'>
                <li onClick={(e) => handleChangeTitle(e)}>
                  <div className='admin-panel-task-item'>
                    <Link to='ver-productos' className='text-dark'>
                      Ver Productos
                    </Link>
                  </div>
                  
                </li>
                <li  onClick={(e) => handleChangeTitle(e)}>
                  <div className='admin-panel-task-item'>
                    <Link to='crear-producto' className='text-dark'>
                      Crear Producto
                    </Link>
                  </div>     
                </li>
                <li  onClick={(e) => handleChangeTitle(e)}>
                  <div className='admin-panel-task-item'>
                    <Link to='crear-categoria' className='text-dark'>
                      Agregar Categoría
                    </Link>
                  </div>
                </li>
                <li  onClick={(e) => handleChangeTitle(e)}>
                  <div className='admin-panel-task-item'>
                    <Link to='asignar-categoria' className='text-dark'>
                      Asignar Categoría
                    </Link>
                  </div>
                </li>
                <li  onClick={(e) => handleChangeTitle(e)}>
                  <div className='admin-panel-task-item'>
                    <Link to='administrar-caracteristicas' className='text-dark'>
                      Administrar Características
                    </Link>
                  </div>
                  
                </li>
              </ul>
            </nav>
          </aside>
          <div className='col-9 p-4'>
            <Routes>
              <Route path='/' element={<AdminPanelOverview/>} />
              <Route path='ver-productos' element={<ProductList />} />
              <Route path='crear-producto' element={<ProductCreate />} />
              <Route path='crear-categoria' element={<CreateCategory />} />
              <Route path='asignar-categoria' element={<CategoryProduct />} />
              <Route path='administrar-caracteristicas' element={<CharacteristicAdmin/>}/>
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
    return (
      <div>
        <h3 className='admin-panel-welcome-title'>Bienvenido al Panel de Administración, {userName}</h3>
        <p className='text-dark'>Aquí podrás realizar cambios en los productos, categorías y Características.</p>
        <p className='text-dark'>Por favor, dirígete al menú lateral izquierdo para realizar una tarea.</p>
      </div>
    )
  }


