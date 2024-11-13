import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import logo from '../../../assets/logo/logo.svg'

function Logo() {
  return (
    <Link to="/">
    <img src={logo} alt="Kasa Logo" className={styles.logo} />
  </Link>

  )
}

export default Logo
