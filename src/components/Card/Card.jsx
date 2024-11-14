
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

function Card(props) {

  return (
    <Link to={`/logement/${props.id}`} style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <img className={styles.image} src={props.image} alt="appart" />
        <div className={styles.card_overlay}></div>
        <h3 className={styles.title}> {props.title} </h3>
      </div>
    </Link>

  )
}

export default Card
