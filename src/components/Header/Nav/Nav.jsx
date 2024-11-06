
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {

  return (

    <nav >
      <ul className={styles.nav} >
        <li> <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Accueil </NavLink></li>
        <li> <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}  >A propos</NavLink></li>
      </ul>
    </nav>
  )

}

export default Nav
