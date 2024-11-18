

import styles from './Header.module.scss';
import Nav from './Nav/Nav.jsx'
import Logo from './Logo/Logo.jsx'

function Header({ disableUnderline }) {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav disableUnderline={disableUnderline} />
    </header>
  );
}

export default Header;

