import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export const SignUpForm = ({ errors, onSubmitCallback }) => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
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
    onSubmitCallback(formValues)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col md='6' xs='12'>
          <Form.Group controlId='formBasicFirstName' className='mb-3'>
            <Form.Label>First Name: </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              value={formValues.firstname}
              onChange={onInputChange}
              isInvalid={errors.firstname}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.firstname}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md='6' xs='12'>
          <Form.Group controlId='formBasicLastName' className='mb-3'>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              value={formValues.lastname}
              onChange={onInputChange}
              isInvalid={errors.lastname}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.lastname}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId='formBasicEmail' className='mb-3'>
        <Form.Label>Email: </Form.Label>
        <Form.Control
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
