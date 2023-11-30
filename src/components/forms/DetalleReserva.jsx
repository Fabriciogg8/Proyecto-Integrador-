// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const DetalleReserva = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    expandOption: false,
    startDate: null,
    endDate: null,
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleChangeDate = (date, field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: date,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Puedes manejar la lógica de envío del formulario aquí
    console.log('Datos del formulario:', formData)
  }

  return (
    <div className='container'>
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='firstName' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className='form-label'>
            Apellido
          </label>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Correo Electrónico
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='expandOption'
            name='expandOption'
            checked={formData.expandOption}
            onChange={handleChange}
          />
          <label className='form-check-label' htmlFor='expandOption'>
            Ampliar Opciones
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label date">
            Fecha de Inicio   
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => handleChangeDate(date, 'startDate')}
            className="form-control"
            id="startDate"
            name="startDate"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()} // Evita fechas pasadas
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label date">
            Fecha de Fin
          </label>
          <DatePicker
            selected={formData.endDate}
            onChange={(date) => handleChangeDate(date, 'endDate')}
            className="form-control"
            id="endDate"
            name="endDate"
            dateFormat="dd/MM/yyyy"
            minDate={formData.startDate} // Evita fechas anteriores a la fecha de inicio
            required
          />
        </div>

        {formData.expandOption && (
          <div className='mb-3'>
            {/* Agrega aquí los campos adicionales para opciones ampliadas */}
            <label htmlFor='additionalField' className='form-label'>
              Campo Adicional
            </label>
            <input
              type='text'
              className='form-control'
              id='additionalField'
              name='additionalField'
              value={formData.additionalField}
              onChange={handleChange}
            />
          </div>
        )}
        <button type='submit' className='btn btn-primary'>
          Enviar Reserva
        </button>

      </form>
    </div>
  );
};