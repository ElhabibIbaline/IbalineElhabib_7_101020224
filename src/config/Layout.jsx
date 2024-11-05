
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"

function Layout() {
  return (
    <>
      <Header />
      <main className="mx-20" style={{ minHeight: '100vh' }} >
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default Layout