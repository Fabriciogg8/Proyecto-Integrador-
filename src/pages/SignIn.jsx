import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { SignInForm } from '../components/forms/SignInForm.jsx'
import { useState, useEffect } from 'react'
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
      errors.email = 'El email es inválido'
    }
    if (!validator.isLength(password, { min: 8, max: 30 })) {
      errors.password = 'La contraseña es requerida'
    }
    if (!isObjectEmpty(errors)) {
      setErrors(errors)
      return
    }
    startLogin({ email, password })
  }
    
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card body style={{ width: '45rem' }}>
        <h3 className='text-center'>Iniciar Sesión</h3>
        <hr />
        <SignInForm errors={errors} onSubmitCallback={login}/>
        <div className='mt-4 ms-2'>
          <Link to={'/signup'}>No tienes una cuenta ? Registrate.</Link>
        </div>
      </Card>
    </Container>
  )
}