import React, { useState } from 'react';
import '../../styles/Product-Detail.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides, show }) => {


  const [showG, setShowG] = useState(show);
    const showGallery = (showG) =>{
        setShowG(showG);
      };
    show = showG

    const data = [
        {
          image:
            'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
        },
        {
          image:
            'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
        }
      ];



  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    
    
      <section className='sliderContainer' style={show ? {display:"block"} : {display:"none"}}>
          <div className='slider'>
            
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        
          {data.map((slide, index) => {
              return (
              <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
              >
                <button className='closeGallery' onClick={() => showGallery(false)}>&times;</button>
                  {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                  )}
                  
              </div>
              );
          })}
          </div>
      </section>
 
     
  );
};

export default ImageSlider;
