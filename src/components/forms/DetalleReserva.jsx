import { useLocation, useParams } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2';
import { GET_RESERVATIONS } from '../../helpers/endpoints.js';
import { useAuthStore } from '../../hooks/useAuthStore.js'
import { ProductContext } from '../../conexts/ProductContext.jsx'
import { useReservaContext } from '../../conexts/ReservaContext.jsx'
import Calendario from '../buscador/Calendario.jsx'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'

export const DetalleReserva = () => {
  const { id } = useParams()
  const { state, fetchCurrentProduct } = useContext(ProductContext)
  const { user } = useAuthStore();
  const {startDate, endDate} = useReservaContext()
  const token = state.token

  useEffect(() => {
    fetchCurrentProduct(id)
  }, []);
  
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.sub,
    startDateForm: startDate,
    endDateForm: endDate
  });


  const convertDateToNumber = (date) => {
    return date ? Math.floor(date.getTime() / 1000) : null;
  };

  const handleSubmit =async(e) => {
    e.preventDefault()

    try{
      const formData = new FormData();
      formData.append('productId', id);
      formData.append('startDate',startDate);
      formData.append('endDate', endDate);
      const response =await fetch(GET_RESERVATIONS, 
      {
        method: 'POST',
              mode: 'cors',
              headers: {
                'Authorization': `Bearer ${token}`,
              },
        body: formData,
      })
      console.log(response) 

      if (response.ok) {
        const responseData = await response.json();
        console.log('Respuesta del servidor', responseData);
        Swal.fire(`${user.firstName}, ¡Tu reserva se ha realizado con éxito!`);
        navigate()

      } else {
        console.error('Error en la solicitud:', response.statusText);
        console.error('Detalles del error:', await response.text());
      }
    } catch (error) {
      console.error('Errores al enviar la reserva', error);
    }
  };

  const handleCloseAlert = () => {
    setShowConfirmation(false);
  };
 
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
            value={form.firstName}
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
            value={form.lastName}
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
            value={form.email}
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
            value={form.startDateForm}
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
            value={form.endDateForm}
            readOnly
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Enviar Reserva
        </button>
      </form>
    </div>
  )
}
