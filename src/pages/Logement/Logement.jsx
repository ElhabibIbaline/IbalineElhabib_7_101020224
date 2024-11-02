// import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Collapse from "../../components/Collapse/Collapse.jsx"
import styles from "./Logement.module.scss"
import Host from "../../components/FicheLogement/Host/Host.jsx"
import Tag from "../../components/FicheLogement/Tag/Tag.jsx"
import Star from "../../components/FicheLogement/Star/Star.jsx"
import Carrousel from "../../components/FicheLogement/Carrousel/Carrousel.jsx"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// import PageNotFound from "../../pages/PageNotFound/PageNotFound"


function Logement() {
  const location = useLocation();
  // console.log("location", location)
  // console.log("our appartement id is", location.state.logementId)

  const [flat, setFlat] = useState(null);

  useEffect(fetchAppartementData, []);

  function fetchAppartementData() {
    fetch("data.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.logementId);
        setFlat(flat);
      })
      .catch(console.error);

  }
  if (flat === null) return <div>..loading</div>;



  return (
    <div>
      <Header />
      <div className={`my-20 ${styles.logement}`}>

        {/* ===================================================================================== */}
        <div className="carrousel">
          <Carrousel pictures={flat.pictures} />
        </div>
        {/* ======================================================================================= */}

     {/* ======================================================================================= */}
        <div className={` d-flex j-c-sb ${styles.location}`}>
          <div className={`${styles.tag}`}>
            <Tag flat={flat} />
          </div>
          <div className={` ${styles.host}`}>
            <Host flat={flat} />
            <Star flat={flat} />
          </div>
        </div>
 {/* ======================================================================================= */}

        <div className={` ${styles.logement_collapse}`}>
          <Collapse title="Description" content={flat.description} />
          <Collapse title="Equippement" content={flat.equipments.map((eq) => (<li key={eq} >{eq}</li>))} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Logement