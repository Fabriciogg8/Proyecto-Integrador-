import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex mb-2'>
        <div className='p-2 ms-4'>
          <p className=''>© {new Date().getFullYear()} Company Name</p>
        </div>
        <div className='ms-auto p-2 me-2'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook size={24} />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter size={24} />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
