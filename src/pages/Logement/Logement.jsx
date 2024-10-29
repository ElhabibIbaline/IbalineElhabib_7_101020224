
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import starActive from "../../assets/starts/star-active.png"
import starInactive from "../../assets/starts/star-inactive.png"
import host from "../../assets/host/Host.png"
import styles from "./Logement.module.scss"
import Collapse from "../../components/Collapse/Collapse.jsx"


function Logement() {
  return (
    <div>
      <Header />
      <div className={`my-20 ${styles.logement}`}>
        <img src="https://picsum.photos/400/200" alt="carousel" />

        <div className={`d-flex j-c-sb ${styles.logement_page}`}>
          <div className={`my-30 ${styles}`}>
            <h1>
              Crazy loft on Canal saint Martin
            </h1>
            <h3>
              Paris ile de France
            </h3>
            <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.logement_tag} `}>
              <p>Cozy</p>
              <p>Canal</p>
              <p>Paris 10</p>
            </div>
          </div>

          <div className={` my-30 flex-column ${styles.host} `}>

            <div className={`d-flex ${styles.name}`} >
              <h3>Alexendre <br /> Dumas</h3>
              <div className={` ${styles.host_img}`} >
                <img src={host} alt="host" />
              </div>
            </div>
            <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.stars}`}>
              <img src={starActive} alt="etoile" />
              <img src={starActive} alt="etoile" />
              <img src={starActive} alt="etoile" />
              <img src={starInactive} alt="start inactive" />
              <img src={starInactive} alt="start inactive" />
            </div>
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