
// import starActive from "../../assets/starts/star-active.png"
// import starInactive from "../../assets/starts/star-inactive.png"
import host from "../../assets/host/Host.png"
import styles from "./Host.module.scss"
// import Star from "./Star"

function Host() {
  return (
    <div className={` my-30 flex-column ${styles.host} `}>

      <div className={`d-flex ${styles.name}`} >
        <h3>Alexendre <br /> Dumas</h3>
        <div className={` ${styles.host_img}`} >
          <img src={host} alt="host" />
        </div>
      </div>
      {/* <Star/> */}
    </div>
  )
}

export default Host