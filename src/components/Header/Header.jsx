
import styles from './Header.module.scss'

import logo from '../../assets/logo/logo.svg'
import Nav from './Nav/Nav.jsx'
function Header() {
  return (
    <header className={styles.header}>
      <div className={`my-20`}>
        <img className={styles.img}  src={logo} alt="logo" />
        {/* <img src="../../src/assets/logo.png" alt="logo" /> */}
      </div>

      <Nav />
    </header>
  )
}

export default Header
