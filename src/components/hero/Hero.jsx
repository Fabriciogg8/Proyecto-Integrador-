import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../styles/Hero/hero.css'

const Hero = () => {
  return (
    <>
      <div
        id='hero-carousel'
        className='carousel slide'
        data-bs-ride='carousel'
        data-bs-interval='7000'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='../hero/hero-banner-1.jpg'
              className='hero-image'
              alt='...'
            />
            <div className='carousel-overlay'></div>
            <div className='hero-text-wrapper'>
              <h2 className='hero-title'>Aprende</h2>
              <p className='hero-text'>
                Instrumentos al alcance de tu mano, para cualquier situación
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='../hero/hero-banner-2.jpg'
              className='hero-image'
              alt='...'
            />
            <div className='carousel-overlay'></div>
            <div className='hero-text-wrapper'>
              <h2 className='hero-title'>Disfruta</h2>
              <p className='hero-text'>
                Instrumentos al alcance de tu mano, para cualquier situación
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='../hero/hero-banner-3.jpg'
              className='hero-image'
              alt='...'
            />
            <div className='carousel-overlay'></div>
            <div className='hero-text-wrapper'>
              <h2 className='hero-title'>Trabaja</h2>
              <p className='hero-text'>
                Instrumentos al alcance de tu mano, para cualquier situación
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='../hero/hero-banner-4.jpg'
              className='hero-image'
              alt='...'
            />
            <div className='carousel-overlay'></div>
            <div className='hero-text-wrapper'>
              <h2 className='hero-title'>Enseña</h2>
              <p className='hero-text'>
                Instrumentos al alcance de tu mano, para cualquier situación
              </p>
            </div>
          </div>
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#hero-carousel'
          data-bs-slide='prev'
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#hero-carousel'
          data-bs-slide='next'
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  )
}
export default Hero
