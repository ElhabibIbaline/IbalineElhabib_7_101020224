import styles from "./Host.module.scss"

function Host(props) {
  
  return (
    <div className={` my-30 flex-column ${styles.host} `}>
      <div className={` d-flex ${styles.name}`} >
        <div className={` p-10 `}>
          <h3>{props.flat.host.name}</h3>
        </div>
        <div className={` ${styles.host_img}`} >
          <img src={props.flat.host.picture} alt="host" />
        </div>
      </div>
    </div>
  )
}

export default Host