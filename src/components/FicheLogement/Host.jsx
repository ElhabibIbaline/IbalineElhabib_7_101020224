
// import starActive from "../../assets/starts/star-active.png"
// import starInactive from "../../assets/starts/star-inactive.png"
// import hosts from "../../assets/host/Host.png"
import styles from "./Host.module.scss"
// import Star from "./Star"

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
      {/* <Star/> */}
    </div>
  )
}

export default Host