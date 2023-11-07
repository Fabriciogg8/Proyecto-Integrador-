import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
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
    <Card body>
      <h3 className='text-center'>Iniciar Sesion</h3>
      <hr />
      <SignInForm errors={errors} onSubmitCallback={login} />
      <div className='mt-4 ms-2'>
        <Link to={'/signup'}>No tienes una cuenta ? Registrate.</Link>
      </div>
    </Card>
  )
}
