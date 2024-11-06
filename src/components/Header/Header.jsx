
import styles from './Header.module.scss'
import logo from '../../assets/logo/logo.svg'
import Nav from './Nav/Nav.jsx'
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header className={styles.header}>
      <div className={`my-20`}>
        <NavLink to='/'>    <img className={styles.img} src={logo} alt="logo" /> </NavLink>
      </div>
      <Nav />
    </header>
  )
}

export default Header
