
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'




function Card({ image, title }) {
  console.log(" console log de Card ", image, title)

  return (
    <Link to="/logement">
      <div className={styles.card}>
        <div >
          <img className={styles.image} src={image} alt="appart" />
        </div>
        <h3 className={styles.h3}> {title} </h3>
      </div>

    </Link>

  )
}

export default Card
