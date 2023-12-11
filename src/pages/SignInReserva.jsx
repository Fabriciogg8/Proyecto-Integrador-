import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { SignInFormReserva } from '../components/forms/SignInFormReserva.jsx'
import { useContext, useState, useEffect } from 'react'
import { isObjectEmpty } from '../helpers/helpers.js'
import validator from 'validator'
import { useAuthStore } from '../hooks/useAuthStore'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../conexts/ProductContext'

export const SignInReserva = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const [errors, setErrors] = useState({})
  const { startLogin } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    fetchCurrentProduct(id)
  }, [id, fetchCurrentProduct])

  const login = async ({ email, password }) => {
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

    try {
      // Llama a la función de inicio de sesión
      await startLogin({ email, password })

      // Después de iniciar sesión con éxito, redirige a la página de reservas
      navigate('/reservas/${id}')
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      // Manejar el error, si es necesario
    }
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card body style={{ width: '45rem' }}>
        <h3 className='text-center'>El inicio de sesión es obligatorio.</h3>
        <p className='text-center'>
          (Si no está registrado, por favor regístrese)
        </p>
        <hr />
        {/* Actualizado para manejar la redirección */}
        <SignInFormReserva errors={errors} onSubmitCallback={login} />
        <div className='mt-4 ms-2'>
          <Link to={'/signup'}>¿No tienes una cuenta? Regístrate.</Link>
        </div>
      </Card>
    </Container>
  )
}
