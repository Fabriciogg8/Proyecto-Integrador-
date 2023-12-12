// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/Nosotros.css'
import { FaArrowLeft } from 'react-icons/fa'

const Nosotros = () => {
  return (
    <section id='about-us'>
      <div className='intro'>
        <h2>Nuestro Equipo</h2>
        <p>
          ¡Bienvenidos al Grupo 5! Esta página representa nuestro proyecto
          integrador del último bimestre en la carrera Certified Tech Developer
          de Digital House. Nos une la pasión compartida por la tecnología y la
          programación. Estamos entusiasmados de presentarles nuestro trabajo
          colaborativo, fruto de semanas de esfuerzo y dedicación conjunta. Cada
          miembro aporta su conocimiento único, creando una sinergia que impulsa
          nuestro proyecto hacia el éxito.
        </p>
      </div>
      <div className='integrantes'>
        <h3 className='tit-int'>Integrantes</h3>
        <div className='card-container'>
          {/* Tarjeta Alina */}
          <div className='card'>
            <img src='../../public/Nosotros/Alina.png' alt='Alina' />
            <div className='card-content'>
              <h3>Alina Casas</h3>
              <p>Rol: Backend</p>
            </div>
          </div>
          {/* Tarjeta Leandro2 */}
          <div className='card'>
            <img src='../../public/Nosotros/Leandro.jpg' alt='Leandro' />
            <div className='card-content'>
              <h3>Leandro Cioli</h3>
              <p>Rol: Frontend - UX/UI</p>
            </div>
          </div>
          {/* Tarjeta Matias */}
          <div className='card'>
            <img src='../../public/Nosotros/Matias.jpg' alt='Matias' />
            <div className='card-content'>
              <h3>Matias Crino</h3>
              <p>Rol: Frontend - UX/UI</p>
            </div>
          </div>
          {/* Tarjeta Virginia  */}
          <div className='card'>
            <img src='../../public/Nosotros/VIR.jpg' alt='Virginia' />
            <div className='card-content'>
              <h3>Virdinia de Rebolledo</h3>
              <p>Rol: Frontend - UX/UI</p>
            </div>
          </div>
          {/* Tarjeta Micaela*/}
          <div className='card'>
            <img src='../../public/Nosotros/Micaela.jpg' alt='Micaela' />
            <div className='card-content'>
              <h3>Micaela Estigarribia</h3>
              <p>Rol: Scrum Master - Infra</p>
            </div>
          </div>
          {/* Tarjeta Fabricio*/}
          <div className='card'>
            <img src='../../public/Nosotros/Fabri.jpeg' alt='Fabri' />
            <div className='card-content'>
              <h3>Nombre2</h3>
              <p>Rol: Backend</p>
            </div>
          </div>
          {/* Tarjeta Simon*/}
          <div className='card'>
            <img src='../../public/Nosotros/Simon.jpeg' alt='Simon' />
            <div className='card-content'>
              <h3>Simon Pintos</h3>
              <p>Rol: Testing</p>
            </div>
          </div>
          {/* Tarjeta Ser*/}
          <div className='card'>
            <img src='../../public/Nosotros/Ser.jpg' alt='Ser' />
            <div className='card-content'>
              <h3>Sergio Racchumí</h3>
              <p>Rol: Frontend - UX/UI</p>
            </div>
          </div>
        </div>
      </div>
      {/* Flecha de regreso al home */}
      <a href='ruta_del_home'>
        <FaArrowLeft /> Volver al Home
      </a>
    </section>
  )
}

export default Nosotros
