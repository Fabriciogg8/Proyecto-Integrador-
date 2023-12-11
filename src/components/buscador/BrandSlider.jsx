import { useEffect, useState } from 'react'
import '../../App.css'

import godin from '/godin.jpg'
import jackson from '/jackson.jpg'
import laney from '/laney.jpg'
import stagg from '/stagg.jpg'
import takamine from '/takamine.jpg'

const BrandSlider = () => {
  const scrollers = document.querySelectorAll('.scroller')
  const [isEffectAdded, setIsEffectAdded] = useState(false)

  useEffect(() => {
    if (
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      !isEffectAdded
    ) {
      addAnimation()
    }
  })

  function addAnimation() {
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    })
    setIsEffectAdded(true)
  }

  return (
    <>
      <div className='scroller' data-direction='right' data-speed='slow'>
        <div className='scroller__inner'>
          <img src={stagg} height='90' width='110' alt='' />
          <img src={takamine} height='90' width='110' alt='' />
          <img src={laney} height='90' width='110' alt='' />
          <img src={jackson} height='90' width='110' alt='' />
          <img src={godin} height='90' width='110' alt='' />
          <img src={godin} height='90' width='110' alt='' />
          <img src={godin} height='90' width='110' alt='' />
          <img src={godin} height='90' width='110' alt='' />
        </div>
      </div>
    </>
  )
}

export default BrandSlider
