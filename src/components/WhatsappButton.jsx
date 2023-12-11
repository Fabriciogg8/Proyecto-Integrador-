import { FloatingWhatsApp } from 'react-floating-whatsapp'
import '../styles/WhatsappButton.css'
import { useState } from 'react'
export default function WhatsappButton() {
  const [errorEnEnvio, setErrorEnEnvio] = useState('')
  const [errorBooleano, setErrorBooleano] = useState(false)
  const [exitoWhatsapp, setExitoWhatsapp] = useState(false)
  const toggleModal = () => {
    setExitoWhatsapp(!exitoWhatsapp)
  }

  const handleError = error => {
    if (error.message.toLowerCase().includes('invalid')) {
      setErrorEnEnvio('Error al contactar con soporte')
    } else if (error.message.toLowerCase().includes('connection')) {
      setErrorEnEnvio('Error en la conexión')
    } else {
      console.log(error)
    }
    setErrorBooleano(true)
  }

  const strChat = 'Buenas!🤝 \nComo te podemos ayudar?'
  const shareOptions = {
    number: '+59899496410',
    message: '¡Hola desde WhatsApp!',
    chatMessage: strChat,
  }

  const handleSuccess = () => {
    setExitoWhatsapp(true)
  }

  return (
    <section>
      <FloatingWhatsApp
        phoneNumber={shareOptions.number}
        message={shareOptions.message}
        accountName='Notas Prestadas'
        avatar='/logo-no-png.png'
        chatMessage={shareOptions.chatMessage}
        allowClickAway
        onSubmit={handleSuccess}
        darkMode
        onError={handleError}
      />
      {exitoWhatsapp && (
        <div>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content-confirm'>
            <h2>Mensaje enviado con éxito!</h2>
            <div className='wrapper'>
              <svg
                className='checkmark'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 52 52'
              >
                {' '}
                <circle
                  className='checkmark__circle'
                  cx='26'
                  cy='26'
                  r='25'
                  fill='none'
                />{' '}
                <path
                  className='checkmark__check'
                  fill='none'
                  d='M14.1 27.2l7.1 7.2 16.7-16.8'
                />
              </svg>
            </div>
            <button className='btn-close-modal-confirm' onClick={toggleModal}>
              Seguir navegando
              <svg
                className='arrow-confirm-size'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0' />
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M6 12H18M18 12L13 7M18 12L13 17'
                    stroke='#ffffff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />{' '}
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
      {errorBooleano && (
        <span className='float-error-whatsapp'>{errorEnEnvio}</span>
      )}
    </section>
  )
}
