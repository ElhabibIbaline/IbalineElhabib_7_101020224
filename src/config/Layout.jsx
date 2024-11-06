
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"
import styles from "./Layout.module.scss"

function Layout() {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.layout}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout