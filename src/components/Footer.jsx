import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import styles from '../styles/Footer/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p className={styles.companyName}>
          © {new Date().getFullYear()} Company Name
        </p>
      </div>
      <div className={styles.logos}>
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
    </footer>
  )
}

export default Footer
