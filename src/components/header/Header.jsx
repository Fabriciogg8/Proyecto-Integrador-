import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'
import { useAuthStore } from '../../hooks/useAuthStore.js'

import { useState } from 'react'
const Header = () => {
  const { status, user, startLogout } = useAuthStore()
  const [showDrawer, setShowDrawer] = useState(false)
  let nombreAcortado
  let apellidoAcortado
  if (user.firstName) {
    nombreAcortado = user.firstName.substring(0, 1)
    apellidoAcortado = user.lastName.substring(0, 1)
  }

  const logout = () => {
    startLogout()
    closeDrawer()
  }

  const closeDrawer = () => {
    setShowDrawer(false)
  }
  const userAvatar = nombreAcortado + apellidoAcortado
  return (
    <header className='header'>
      <Navbar expand='lg' className='fixed-top'>
        <Container className='flex'>
          <Navbar.Brand href='/' className='me-auto'>
            <img src='/logo-sinLetras.png' alt='' className='img' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => setShowDrawer(!showDrawer)}
          />
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
                  title={
                    <span className='user-sub'>
                      {user.firstName} {user.lastName}
                      <div className='user-pill'>
                        <p>{userAvatar}</p>
                      </div>
                    </span>
                  }
                  id='basic-nav-dropdown'
                >
                  {user.role === 'ADMIN' && (
                    <>
                      <NavDropdown.Item as={NavLink} to={'/admin-panel'}>
                        Administración
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </>
                  )}
                  <>
                    <NavDropdown.Item onClick={logout}>
                      Cerrar Sesión
                    </NavDropdown.Item>
                  </>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showDrawer} onHide={closeDrawer}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-dark'>
            Menú
            {status !== 'not-authenticated' && (
              <span className='user-sub text-dark'>
                <div className='user-pill text-light'>
                  <p>{userAvatar}</p>
                </div>
                {user.firstName} {user.lastName}
              </span>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            {status === 'not-authenticated' ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to={'/signin'}
                  className=' text-dark'
                  onClick={closeDrawer}
                >
                  Iniciar Sesión
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to={'/signup'}
                  className=' text-dark'
                  onClick={closeDrawer}
                >
                  Crear Cuenta
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to={'/admin-panel'}
                  className='text-dark'
                  onClick={closeDrawer}
                >
                  Administración
                </Nav.Link>
                <Nav.Link onClick={logout} className='text-dark'>
                  Cerrar Sesión
                </Nav.Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}

export default Header
