
import './style.css'

import logo from '../../assets/logo/.LOGO.svg'
import Nav from '../Nav/Nav'
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        {/* <img src="../../src/assets/logo.png" alt="logo" /> */}
      </div>

      <Nav />
    </header>
  )
}

export default Header
