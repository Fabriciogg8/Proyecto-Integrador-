import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { SignInForm } from '../components/forms/SignInForm.jsx'
import { useState } from 'react'
import { isObjectEmpty } from '../helpers/helpers.js'
import validator from 'validator'
import { useAuthStore } from '../hooks/useAuthStore.js'

export const SignIn = () => {
  const [errors, setErrors] = useState({})
  const { startLogin } = useAuthStore()

  const login = ({ email, password }) => {
    const errors = {}
    setErrors(errors)

    if (!validator.isEmail(email)) {
      errors.email = 'El email es invalido'
    }
    if (!validator.isLength(password, { min: 8, max: 30 })) {
      errors.password = 'El password es requerido'
    }

    if (!isObjectEmpty(errors)) {
      setErrors(errors)
      return
    }

    startLogin({ email, password })
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm='12' md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card body>
            <h3>Iniciar Sesion</h3>
            <hr />
            <SignInForm errors={errors} onSubmitCallback={login} />
            <div className='mt-4'>
              <Link to={'/signup'}>No tienes una cuenta ? Registrate.</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
