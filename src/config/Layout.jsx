
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout