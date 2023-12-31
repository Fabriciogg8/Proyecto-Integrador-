import { FaFacebook, FaTwitter, FaInstagram, FaInfoCircle  } from 'react-icons/fa'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

  const Footer = () => {
    return (
      <footer className='footer'>
        <div className='d-flex mb-2'>
          <div className='p-2 ms-4 logo'>
            <p className=''>© {new Date().getFullYear()} Notas Prestadas</p>
          </div>
          <div className='ms-auto p-2 me-2 icons'>
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
            {/* Enlace a la página "About Us" */}
            <Link to="/nosotros" className="about-us-link" title="Sobre Nosotros">
            <FaInfoCircle size={24} />
          </Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;