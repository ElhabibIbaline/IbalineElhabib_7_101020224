import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

function Nav({ disableUnderline }) {
  return (
    <nav className={styles.nav}>
      {/* Lien Accueil */}
      <NavLink
        to="/accueil"
        className={disableUnderline ? `${styles.accueil} ${styles['no-underline']}` : styles.accueil}
      >
        Accueil
      </NavLink>

      {/* Lien À propos */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.about}` : styles.about
        }
      >
        À propos
      </NavLink>
    </nav>
  );
}

export default Nav;
