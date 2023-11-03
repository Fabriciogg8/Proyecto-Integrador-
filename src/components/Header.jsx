import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/Header/Header.css'
import { useAuthStore } from '../hooks/useAuthStore.js'
import logo from '../assets/logo-sinLetras.png'
const Header = () => {
  const { status, user, startLogout } = useAuthStore()

    // return (
    //     <nav className="navbar sticky-top navbar-expand-lg bg-dark-blue">
    //       <div className="container-fluid">
    //         <Link to="/">
    //           <div className="navbar-brand">

    //             <img src={logo} alt=""/>            
    //             <small>Instrumentos prestados, tu inspiración temporal</small>
    //           </div>
    //         </Link>
    //             <div className="dropdown">   
    //               <button className="btn btn-secondary opt-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               </button>
    //               <ul className="dropdown-menu opt-dropdown">
    //                 <li>
    //                   <a className="dropdown-item opt-dropdown" href="#">
    //                     Crear Cuenta
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a className="dropdown-item opt-dropdown" href="#">
    //                     Iniciar Sesión
    //                   </a>
    //                 </li>
    //             </ul>
    //           </div>  
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           </ul>
    //           <form className="d-flex" role="search">
    //             <button className="btn button">Crear Cuenta</button>
    //             <button className="btn button">Iniciar Sesión</button>
    //           </form>
    //         </div>
    //       </div>
    //     </nav>
    // );
// };


  const logout = () => {
    startLogout()
  }

  return (
    // <nav className='navbar sticky-top navbar-expand-lg bg-dark-blue'>
    //   <div className='container-fluid'>
    //     <Link to='/'>
    //       <div className='navbar-brand'>
    //         <img src='src/assets/logo-sinLetras.png' alt='' />
    //         Instrumentos prestados, tu inspiración temporal
    //       </div>
    //     </Link>
    //     <div className='dropdown'>
    //       <button
    //         className='btn btn-secondary opt-dropdown dropdown-toggle'
    //         type='button'
    //         data-bs-toggle='dropdown'
    //         aria-expanded='false'
    //       ></button>
    //       <ul className='dropdown-menu opt-dropdown'>
    //         <li>
    //           <Link to='/signup' className=''>
    //             <a className='dropdown-item opt-dropdown' href='#'>
    //               Crear Cuenta
    //             </a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='/signin' className=''>
    //             <a className='dropdown-item opt-dropdown' href='#'>
    //               Iniciar Sesion
    //             </a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
    //       <form className='d-flex' role='search'>
    //         <Link to='/signup' className=''>
    //           <button className='btn button'>Crear Cuenta</button>
    //         </Link>
    //         <Link to='/signin' className=''>
    //           <button className='btn button'>Iniciar Sesion</button>
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // </nav>    <Navbar expand='lg' className='bg-body-tertiary'>
    <Navbar expand='lg' className='bg-dark-blue'>
      <Container className='flex'>
        <Navbar.Brand href='/' className='me-auto'>
          <img src='src/assets/logo-sinLetras.png' alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='ml-auto'>
            {status === 'not-authenticated' ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to={'/signin'}
                  className='button no-highlight'
                >
                  Iniciar Sesion
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to={'/signup'}
                  className='button no-highlight'
                >
                  Crear Cuenta
                </Nav.Link>
              </>
            ) : (
              <NavDropdown
                title={<span className='user-sub'>{user.sub}</span>}
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item as={NavLink} to={'/1'}>
                  1
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={'/2'}>
                  12
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  Cerrar Sesion
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
