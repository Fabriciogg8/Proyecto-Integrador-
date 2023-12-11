import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../../hooks/useAuthStore.js'
import '../../styles/Header.css'

const Header = () => {
  const { status, user, startLogout } = useAuthStore()
  const [showDrawer, setShowDrawer] = React.useState(false)

  const closeDrawer = () => {
    setShowDrawer(false)
  }

  const logout = () => {
    startLogout()
    closeDrawer()
  }

  const nombreAcortado = user.firstName ? user.firstName.substring(0, 1) : ''
  const apellidoAcortado = user.lastName ? user.lastName.substring(0, 1) : ''
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
                    to='/signin'
                    className='button no-highlight'
                    onClick={closeDrawer}
                  >
                    Iniciar Sesión
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to='/signup'
                    className='button no-highlight'
                    onClick={closeDrawer}
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
                      <NavDropdown.Item
                        as={NavLink}
                        to='/admin-panel'
                        onClick={closeDrawer}
                      >
                        Administración
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        as={NavLink}
                        to='/favourites'
                        onClick={closeDrawer}
                      >
                        Favoritos
                      </NavDropdown.Item>
                    </>
                  )}
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
