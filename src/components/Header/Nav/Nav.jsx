
import styles from './Nav.module.scss'
function Nav() {
  return (
    <nav >
      <ul className="d-flex">
        <li className={`${styles.home}`}>Accueil</li>
        <li className={`${styles.about}`}>A propos</li>
      </ul>
    </nav>
  )
}

export default Nav
