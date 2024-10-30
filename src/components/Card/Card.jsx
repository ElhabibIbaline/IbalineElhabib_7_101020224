
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'




function Card(props) {
  // console.log(" console log de Card ", image, title)
  const state = {
    logementId: props.id
  }
    ;
  return (
    <Link to="/logement" state={state} style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <div >
          <img className={styles.image} src={props.image} alt="appart" />
        </div>
        <h3 className={styles.title}> {props.title} </h3>
      </div>

    </Link>

  )
}

export default Card
