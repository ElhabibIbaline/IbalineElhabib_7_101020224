import styles from './Carrousel.module.scss'

function Carousel(props) {
  return (
    <div className={styles.carrousel}>
      <img src={props.imageUrl} alt="carousel" />
    </div>
  )
}

export default Carousel

