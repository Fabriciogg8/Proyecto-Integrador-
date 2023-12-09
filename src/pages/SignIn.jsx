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
  const [showText, setShowText] = useState(false)

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

    /*Codigo para poder mostrar el texto de login obligatorio cuando se quiere reservar sin haber iniciado sesión*/
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setShowText(params.get('showText') === 'true');
      }, []
      );
    
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card body style={{ width: '45rem' }}>
        {showText && <p className='aclaracionSignIn'>Para poder reservar productos inicia sesión o en caso de no contar con una cuenta, registrate</p>}
        <h3 className='text-center'>Iniciar Sesion</h3>
        <hr />
        <SignInForm errors={errors} onSubmitCallback={login}/>
        <div className='mt-4 ms-2'>
          <Link to={'/signup'}>No tienes una cuenta ? Registrate.</Link>
        </div>
      </Card>
    </Container>
  )
}