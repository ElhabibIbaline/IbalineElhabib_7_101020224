
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Collapse from "../../components/Collapse/Collapse.jsx"
import styles from "./Logement.module.scss"
import Host from "../../components/FicheLogement/Host.jsx"
import Tag from "../../components/FicheLogement/Tag.jsx"
import Star from "../../components/FicheLogement/Star.jsx"
import Carrousel from "../../components/FicheLogement/Carrousel.jsx"

function Logement() {
  return (
    <div>
      <Header />
      <div className={`my-20 ${styles.logement}`}>
        <div className="carrousel">
          <Carrousel />
        </div>
        <div className={` d-flex j-c-sb ${styles.location}`}>
          <div className={`${styles.tag}`}>
            <Tag />
          </div>
          <div className={` ${styles.host}`}>
            <Host />
            <Star />
          </div>
        </div>

        <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.collapse}`}>
          <Collapse />
          <Collapse />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Logement