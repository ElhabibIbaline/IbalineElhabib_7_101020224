import { useEffect, useState } from "react"
// import { useLocation } from "react-router-dom"
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse.jsx"
import Host from "../../components/FicheLogement/Host/Host.jsx"
import Tag from "../../components/FicheLogement/Tag/Tag.jsx"
import Star from "../../components/FicheLogement/Star/Star.jsx"
import Carrousel from "../../components/FicheLogement/Carrousel/Carrousel.jsx"
// import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import styles from "./Logement.module.scss"

function Logement() {
  const { logementId } = useParams(); // Récupérer logementId depuis l'URL
  const [flat, setFlat] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((flats) => {
        console.log("Données chargées :", flats); // Vérifiez les données
        const flat = flats.find((flat) => flat.id === logementId); // Utiliser logementId pour trouver le logement
        console.log("Logement trouvé :", flat); // Vérifiez le logement trouvé
        if (flat) {
          setFlat(flat);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des données :", err);
        setError(true);
      });
  }, [logementId]);


  // if (error) return <ErrorPage />; // Affiche le composant ErrorPage en cas d'erreur

  //  Si l'erreur est vraie redirige vers une page d'erreur avec Navigate 
  if (error) return <Navigate to="/error" />; 
  if (flat === null) return <div>Chargement...</div>;



  return (
    <div>
      <Header />
      <main>

        <div className={styles.logement}>
          <div className="carrousel">
            <Carrousel pictures={flat.pictures} />
          </div>

          <div className={styles.location}>
            <div className={styles.tag}>
              <Tag flat={flat} />
            </div>
            <div className={styles.host}>
              <Host flat={flat} />
              <Star flat={flat} />
            </div>
          </div>

          <div className={styles.logement_collapse}>
            <Collapse title="Description" content={flat.description} />
            <Collapse title="Equippement" content={flat.equipments.map((eq) => (<li key={eq} >{eq}</li>))} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Logement

