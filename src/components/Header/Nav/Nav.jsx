
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {

  return (

    <nav >
      <ul className={`${styles.nav}`} >
        <li> <NavLink to="/" className={styles.NavLink_home}>Accueil </NavLink></li>
        <li> <NavLink to="/about" className={styles.NavLink_about}  >A propos</NavLink></li>
      </ul>
    </nav>
  )

}

export default Nav
