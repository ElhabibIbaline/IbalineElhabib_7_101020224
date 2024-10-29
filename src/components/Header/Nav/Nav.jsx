
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
function Nav() {
  return (
    <nav >
      <ul className="d-flex">
        <Link to="/">   <li className={`${styles.home}`}>Accueil</li></Link>
        <Link to="/about">  <li className={`${styles.about}`}>A propos</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
/**
 <p> <Link to="/"> Retourner sur la page d’accueil </Link></p>
 */