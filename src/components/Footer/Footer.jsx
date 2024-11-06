import styles from './Footer.module.scss'
import logo from '../../assets/logo/logo-footer.png'

function Footer() {
  return (
    <div className={` ${styles.footer}`}>
      <img className='mt-20' src={logo} alt="logo" />
      <p className={` m-20${styles.footer_text}`}> © 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
