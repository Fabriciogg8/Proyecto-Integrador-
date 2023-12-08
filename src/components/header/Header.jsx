import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'
import { useAuthStore } from '../../hooks/useAuthStore.js'
const Header = () => {
  const { status, user, startLogout } = useAuthStore()
  let nombreAcortado;
  let apellidoAcortado;
  if(user.firstName){
    nombreAcortado  = user.firstName.substring(0, 1);
    apellidoAcortado = user.lastName.substring(0, 1);
  }
  const logout = () => {
    startLogout()
  }
  const userAvatar = nombreAcortado + apellidoAcortado;
  return (
    <header className='header'>
      <Navbar expand='lg' className='fixed-top'>
        <Container className='flex'>
          <Navbar.Brand href='/' className='me-auto'>
            <img src='/logo-sinLetras.png' alt='' className='img'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='ml-auto'>
              {status === 'not-authenticated' ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    to={'/signin'}
                    className='button no-highlight'
                  >
                    Iniciar Sesión
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to={'/signup'}
                    className='button no-highlight'
                  >
                    Crear Cuenta
                  </Nav.Link>
                </>
              ) : user.role === 'ADMIN' ? (
                <NavDropdown
                  title={<span className='user-sub'>{user.firstName} {user.lastName}<p>{userAvatar}</p></span>}
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Item as={NavLink} to={'/admin-panel'}>
                    Administración
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to={'/favourites'}>
                    Favoritos
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item onClick={logout}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title={<span className='user-sub'>{userAvatar}</span>}
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
