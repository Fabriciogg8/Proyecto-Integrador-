import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const DetalleReserva = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    expandOption: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes manejar la lógica de envío del formulario aquí
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="container">
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="expandOption"
            name="expandOption"
            checked={formData.expandOption}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="expandOption">
            Ampliar Opciones
          </label>
        </div>
        {formData.expandOption && (
          <div className="mb-3">
            {/* Agrega aquí los campos adicionales para opciones ampliadas */}
            <label htmlFor="additionalField" className="form-label">
              Campo Adicional
            </label>
            <input
              type="text"
              className="form-control"
              id="additionalField"
              name="additionalField"
              value={formData.additionalField}
              onChange={handleChange}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Enviar Reserva
        </button>
      </form>
    </div>
  );
};

