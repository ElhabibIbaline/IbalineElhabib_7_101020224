import starActive from "../../assets/starts/star-active.png"
import starInactive from "../../assets/starts/star-inactive.png"

import styles from "./Star.module.scss"

function Star() {
  return (
    <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.stars}`}>
    <img src={starActive} alt="etoile" />
    <img src={starActive} alt="etoile" />
    <img src={starActive} alt="etoile" />
    <img src={starInactive} alt="start inactive" />
    <img src={starInactive} alt="start inactive" />
  </div>
  )
}

export default Star