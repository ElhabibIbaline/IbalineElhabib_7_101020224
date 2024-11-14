import styles from './Footer.module.scss'
import logo from '../../assets/logo/logo-footer.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}><img src={logo} alt="logo" /></div>
        <h3 className={styles.footer_text}> © 2020 Kasa. All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer
