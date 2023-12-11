import React, { useState } from 'react'
import '../../styles/Product-Detail.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides, show, setShowG }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section
      className='sliderContainer'
      style={show ? { display: 'block' } : { display: 'none' }}
    >
      <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              <p className='closeGallery' onClick={() => setShowG(false)}>
                &times;
              </p>
              {index === current && (
                <img src={slide} alt='product image' className='image' />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ImageSlider
