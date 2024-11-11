import { NavLink } from 'react-router-dom'
import styles from './Logo.module.scss'
import logo from '../../../assets/logo/logo.svg'

function Logo() {
  return (
    <NavLink to='/'><img className={styles.logo} src={logo} alt="logo" /> </NavLink>
  )
}

export default Logo