
import styles from "./Tag.module.scss"

function Tag(props) {

  // console.log('props', props)
  const appart = props.flat


  return (



    <div className={styles.tag}>
      <div className={styles.tag_title}>
        <h1 >
          {appart.title}
        </h1>
      </div>
      <div className={styles.tag_location}>
        <h3 >
          {appart.location}
        </h3>
      </div>
      <div className={styles.tags}>
        {appart.tags.map((tag) => (
          <p key={tag} >{tag}</p>
        ))}

      </div>
    </div>
  )
}

export default Tag