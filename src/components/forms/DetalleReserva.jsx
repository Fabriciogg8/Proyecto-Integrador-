import { useLocation, useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuthStore } from '../../hooks/useAuthStore.js'
import { ProductContext } from '../../conexts/ProductContext.jsx'
import { useReservaContext } from '../../conexts/ReservaContext.jsx'
import Calendario from '../buscador/Calendario.jsx'
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

export const DetalleReserva = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const { user } = useAuthStore();
  const {startDate, endDate} = useReservaContext()

  useEffect(() => {
    fetchCurrentProduct(id)
  }, []);
  
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.sub,
    startDate: format(startDate, 'd MMMM yyyy', { locale: es }),
    endDate: format(endDate, 'd MMMM yyyy', { locale: es })
  });

  const handleSubmit = e => {
    e.preventDefault()
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
            readOnly
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
            readOnly
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
            readOnly
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='fechaInicio' className='form-label'>
            Fecha Inicio
          </label>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            value={formData.startDate}
            readOnly
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='fechaFin' className='form-label'>
            Fecha Fin
          </label>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            value={formData.endDate}
            readOnly
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Enviar Reserva
        </button>

      </form>
    </div>
  );
};