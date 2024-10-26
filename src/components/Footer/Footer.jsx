import styles from './Footer.module.scss'
import logo from '../../assets/logo/logo-footer.png'

function Footer() {
  return (
    <div className={`d-flex justify-content-center align-items-center flex-column ${styles.footer}`}>
      <img className='mt-20' src={logo} alt="logo" />
      <p className={`${styles.footer_text} m-20`}> © 2020 Kasa. All rights reserved</p>

    </div>
  )
}

export default Footer
