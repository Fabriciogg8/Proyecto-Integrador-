import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuthStore } from '../../hooks/useAuthStore.js'

export const DetalleReserva = () => {
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const resp = await fetch('http://174.129.92.139:8001/api/v1/reservations/19');
        if (!resp.ok) {
          throw new Error('Error al obtener datos de reserva');
        }
        const data = await resp.json();
        setReservationData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservationData();
  }, []);

  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.sub,
    startDate: reservationData.length > 0 ? reservationData[0].startDate : null,
    endDate: reservationData.length > 0 ? reservationData[0].endDate : null,
  });
  console.log(reservationData)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleChangeDate = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };
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
            readOnly
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
            minDate={formData.endDate} // Evita fechas anteriores a la fecha de inicio
            readOnly
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