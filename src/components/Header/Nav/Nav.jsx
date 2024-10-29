
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
function Nav() {
  return (
    <nav className={`${styles.nav}`} >
      <ul className="d-flex">
        <Link to="/" style={{ textDecoration: 'none' }} >   <li className={`${styles.home} `}>Accueil</li></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>  <li className={`${styles.about}`}>A propos</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
