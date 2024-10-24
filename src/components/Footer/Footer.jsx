import './style.css'
import logo from '../../assets/logo/logo-footer.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" width="100" />
        {/* <img src="../../public/logo.png" alt="logo" width="100" /> */}
      </div>
      <div> 2020 Kasa. All rights reserved
      </div>

    </div>
  )
}

export default Footer
