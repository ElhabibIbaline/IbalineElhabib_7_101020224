import styles from './Banner.module.scss'

function Banner({ image, text }) {
  return (

      <div className={styles.banner}>
        <img className={styles.img} src={image} alt="banner" />
        <div className={styles.sombre} ></div>
        <h1 className={styles.h1}>{text} </h1>
      </div>


  )
}

export default Banner
