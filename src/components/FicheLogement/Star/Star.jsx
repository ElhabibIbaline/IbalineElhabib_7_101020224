import starActive from "../../../assets/starts/star-active.png"
import starInactive from "../../../assets/starts/star-inactive.png"

import styles from "./Star.module.scss"

function Star(props) {

  const rating = props.flat.rating;
  const notes = [1, 2, 3, 4, 5];

  return (
    <div className={styles.stars}>

      {notes.map((note) =>
        rating >= note ? (
          <img key={note.toString()} src={starActive} alt="star" />
        ) : (
          <img
            key={note.toString()} src={starInactive} alt="star" />
        )
      )}

    </div>
  )
}

export default Star