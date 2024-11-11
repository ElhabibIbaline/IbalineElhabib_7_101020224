
import styles from './Header.module.scss'
import Logo from './Logo/Logo.jsx'

import Nav from './Nav/Nav.jsx'


function Header() {

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
