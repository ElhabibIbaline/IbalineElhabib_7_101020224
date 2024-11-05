import styles from "./Host.module.scss"

function Host(props) {
  const name = props.flat.host.name
  const [firstname, lastname] = name.split(" ");

  return (

    <div className={`${styles.host}`} >
      <div className={styles.host_name}>
        <span>{firstname}</span>
        <span>{lastname}</span>
      </div>
      <div className={` ${styles.host_img}`} >
        <img src={props.flat.host.picture} alt="host-image" />
      </div>
    </div>

  )
}

export default Host