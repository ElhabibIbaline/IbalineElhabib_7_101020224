
import styles from "./Tag.module.scss"

function Tag() {
  return (
    <div className={`my-30 ${styles.tag}`}>
    <h1>
      Crazy loft on Canal saint Martin
    </h1>
    <h3>
      Paris ile de France
    </h3>
    <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.logement_tag} `}>
      <p>Cozy</p>
      <p>Canal</p>
      <p>Paris 10</p>
    </div>
  </div>
  )
}

export default Tag