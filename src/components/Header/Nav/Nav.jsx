
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {

  return (
    <nav className={styles.nav}>
      <NavLink to="/accueil" className={({ isActive }) => isActive ? `${styles.active} ${styles.accueil}` : styles.accueil}>Accueil</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.active} ${styles.about}` : styles.about}>A propos</NavLink>
    </nav>
  )

}

export default Nav
