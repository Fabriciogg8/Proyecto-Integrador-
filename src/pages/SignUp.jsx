import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { SignUpForm } from '../components/forms/SignUpForm.jsx'
import { useState } from 'react'
import { isObjectEmpty } from '../helpers/helpers.js'
import validator from 'validator'
import { useAuthStore } from '../hooks/useAuthStore.js'

export const SignUp = () => {
  const [errors, setErrors] = useState({})
  const { startRegister } = useAuthStore()

  const register = ({ firstname, lastname, email, password }) => {
    const errors = {}
    setErrors(errors)

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

    startRegister({ email, password, firstname, lastname })
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card body style={{ width: '45rem' }}>
        <h3 className='text-center'>Crear Cuenta</h3>
        <hr />
        <SignUpForm errors={errors} onSubmitCallback={register} />
        <div className='mt-4 ms-2'>
          <Link to={'/signin'}>Ya tienes una cuenta ? Iniciar Sesion.</Link>
        </div>
      </Card>
    </Container>
  )
}
