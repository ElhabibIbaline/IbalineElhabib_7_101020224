import styles from './Footer.module.scss'
import logo from '../../assets/logo/logo-footer.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo" />
      <p className={styles.footer_text}> © 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
