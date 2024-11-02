
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {

  return (

    <nav className={`${styles.nav}`} >
      <ul className="d-flex">
        <NavLink to="/" style={{ textDecoration: 'none' }} >
          <li className={`${styles.home} `}>Accueil</li>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: 'none' }} >
          <li className={`${styles.about}`}>A propos</li>
        </NavLink>
      </ul>
    </nav>
  )
  
}

export default Nav
