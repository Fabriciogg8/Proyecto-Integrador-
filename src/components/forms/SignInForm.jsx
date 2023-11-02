import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useAuthStore } from '../../hooks/useAuthStore.js'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

export const SignInForm = ({ errors, onSubmitCallback }) => {
  const { errorMessage } = useAuthStore()

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(formValues)
    onSubmitCallback(formValues)
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
      setFormValues({
        email: '',
        password: '',
      })
    }
  }, [errorMessage])

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId='formBasicEmail' className='mb-3'>
        <Form.Label>Correo Electronico: </Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Enter email'
          value={formValues.email}
          onChange={onInputChange}
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId='formBasicPassword' className='mb-3'>
        <Form.Label>Contraseña: </Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Ingrese Contraseña'
          value={formValues.password}
          onChange={onInputChange}
          isInvalid={errors.password}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant='primary' type='submit' className='mt-2'>
        Iniciar Sesion
      </Button>
    </Form>
  )
}
