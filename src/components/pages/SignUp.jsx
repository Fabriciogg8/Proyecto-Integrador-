import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { SignUpForm } from '../forms/SignUpForm.jsx'
import { useState } from 'react'
import { isObjectEmpty } from '../helpers/helpers.js'
import validator from 'validator'

export const SignUp = () => {
  const [errors, setErrors] = useState({})

  const register = formValues => {
    const errors = {}
    setErrors(errors)
    const { email, password, firstname, lastname } = formValues

    if (!validator.isEmail(email)) {
      errors.email = 'El email es invalido'
    }
    if (!validator.isLength(password, { min: 8, max: 30 })) {
      errors.password = 'El password es requerido'
    }
    if (!validator.isLength(firstname, { min: 2, max: 30 })) {
      errors.firstname = 'El nombre es requerido'
    }
    if (!validator.isLength(lastname, { min: 2, max: 30 })) {
      errors.lastname = 'El apellido es requerido'
    }

    if (!isObjectEmpty(errors)) {
      setErrors(errors)
      return
    }
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm='12' md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card body>
            <h3>Crear Cuenta</h3>
            <hr />
            <SignUpForm errors={errors} onSubmitCallback={register} />
            <div className='mt-4'>
              <Link to={'/signin'}>Ya tienes una cuenta ? Iniciar Sesion.</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
