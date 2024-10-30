
import styles from "./Tag.module.scss"

function Tag(props) {
  // console.log("props", props)

  const flat = props.flat
  return (
    <div className={`my-30 ${styles.tag}`}>
      <h1>
        {flat.title}
      </h1>
      <h3>
        {flat.location}
      </h3>
      <div className={`d-flex j-c-c a-i-c j-c-sb ${styles.logement_tag} `}>
        {flat.tags.map((tag) => (
          <p>   {tag}  </p>
        ))}

      </div>
    </div>
  )
}

export default Tag