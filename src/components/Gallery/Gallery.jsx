import Card from '../Card/Card.jsx'
import styles from "./Gallery.module.scss"
import data from "../../datas/kasa-data.json"
// import { Link } from 'react-router-dom';


function Gallery() {

  const logements = data;


  return (
    <div className={styles.cards}>

      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} image={logement.cover} id={logement.id} />
      )
      )
      }

    </div>
  )
}
export default Gallery



