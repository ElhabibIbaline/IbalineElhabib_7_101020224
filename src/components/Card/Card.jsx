
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'




function Card({ image, title }) {
  console.log(" console log de Card ", image, title)

  return (
    <Link to="/logement" style={{ textDecoration: 'none'}}>
      <div className={styles.card}>
        <div >
          <img className={styles.image} src={image} alt="appart" />
        </div>
        <h3 className={styles.title}> {title} </h3>
      </div>

    </Link>

  )
}

export default Card
