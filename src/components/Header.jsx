import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/Header/Header.css'
import { useAuthStore } from '../hooks/useAuthStore.js'
const Header = () => {
  const { status, user, startLogout } = useAuthStore()

  const logout = () => {
    startLogout()
  }

  return (
    <header className='header'>
      <Navbar expand='lg' className='bg-dark-blue fixed-top'>
        <Container className='flex'>
          <Navbar.Brand href='/' className='me-auto'>
            <img src='src/assets/logo-sinLetras.png' alt='' />
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
              ) : (
                <NavDropdown
                  title={<span className='user-sub'>{user.firstName}</span>}
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Item as={NavLink} to={'/1'}>
                    Registrar Producto
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to={'/2'}>
                    Otra cosa
                  </NavDropdown.Item>
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
