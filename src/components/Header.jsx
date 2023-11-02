import '../styles/Header/Header.css';
import logo from '../assets/logo-sinLetras.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark-blue">
          <div className="container-fluid">
            <Link to="/">
              <div className="navbar-brand">
                <img src={logo} alt=""/>            
                <span>Instrumentos prestados, tu inspiración temporal</span>
              </div>
            </Link>
                <div className="dropdown">   
                  <button className="btn btn-secondary opt-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  </button>
                  <ul className="dropdown-menu opt-dropdown">
                    <li>
                      <a className="dropdown-item opt-dropdown" href="#">
                        Crear Cuenta
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item opt-dropdown" href="#">
                        Iniciar Sesión
                      </a>
                    </li>
                </ul>
              </div>  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex" role="search">
                <button className="btn button">Crear Cuenta</button>
                <button className="btn button">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </nav>
    );
};

export default Header;