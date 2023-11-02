import '/src/styles/Header/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg bg-dark-blue'>
      <div className='container-fluid'>
        <Link to='/'>
          <div className='navbar-brand'>
            <img src='src/assets/logo-sinLetras.png' alt='' />
            Instrumentos prestados, tu inspiración temporal
          </div>
        </Link>
        <div className='dropdown'>
          <button
            className='btn btn-secondary opt-dropdown dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          ></button>
          <ul className='dropdown-menu opt-dropdown'>
            <li>
              <Link to='/signup' className=''>
                <a className='dropdown-item opt-dropdown' href='#'>
                  Crear Cuenta
                </a>
              </Link>
            </li>
            <li>
              <Link to='/signin' className=''>
                <a className='dropdown-item opt-dropdown' href='#'>
                  Iniciar Sesion
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
          <form className='d-flex' role='search'>
            <Link to='/signup' className=''>
              <button className='btn button'>Crear Cuenta</button>
            </Link>
            <Link to='/signin' className=''>
              <button className='btn button'>Iniciar Sesion</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
