
import styles from "./Tag.module.scss"

function Tag(props) {

  const flat = props.flat
  return (
    <div className={` ${styles.tag}`}>
      <div>
        <h1 className={`${styles.tag_title}`}>
          {flat.title}
        </h1>
        <h3 className={`${styles.tag_location}`}>
          {flat.location}
        </h3>
      </div>
      <div className={`${styles.tags} `}>
        {flat.tags.map((tag) => (
          <p key={tag} >{tag}</p>
        ))}

      </div>
    </div>
  )
}

export default Tag