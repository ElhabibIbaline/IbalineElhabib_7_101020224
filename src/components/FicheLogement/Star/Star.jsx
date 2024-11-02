import starActive from "../../../assets/starts/star-active.png"
import starInactive from "../../../assets/starts/star-inactive.png"

import styles from "./Star.module.scss"

function Star(props) {

  const rating = props.flat.rating;
  const notes = [1, 2, 3, 4, 5];


  return (
    <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.stars}`}>

      {notes.map((note) =>
        rating >= note ? (
          <img key={note.toString()} src={starActive} alt="star" />
        ) : (
          <img
            key={note.toString()} src={starInactive} alt="star" />
        )
      )}

      {/* <img src={starActive} alt="etoile" />
      <img src={starActive} alt="etoile" />
      <img src={starActive} alt="etoile" />
      <img src={starInactive} alt="start inactive" />
      <img src={starInactive} alt="start inactive" /> */}
    </div>
  )
}

export default Star