import Card from '../Card/Card.jsx'
import styles from "./Cards.module.scss"
import data from "../../datas/kasa-data.json"
// import { Link } from 'react-router-dom';


function Cards() {

  const logements = data;


  return (
    <div className={styles.cards}>

      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} image={logement.cover} />
      )
      )
      }

    </div>
  )
}
export default Cards

// <div className={styles.cards}>

// {
//   logements.map((logement) => (
//     <Card key={logement.id} image={r.image} title={r.title} />
//   ))}

// </div>


/*
 {/* {
        logements.map((l) => {
          return (
            <article key={l.id}>
              <Link to={`/logement ${l.id}`}>
                <Card image={l.cover} title={l.title} />
              </Link>

            </article>
          )
        }


        )} }*/

