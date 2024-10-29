
import styles from './Collapse.module.scss'
function Collapse() {
  return (
    <div className={` d-flex j-c-c j-c-sb ${styles.collapse}`}>
      <div className={`${styles.logement_description}`}>
        <div className={`d-flex a-i-c j-c-sb ${styles.descriptionTitle}`} >
          <h4>Description </h4>
          {/* <i className="fas fa-chevron-down"></i> */}
          <i className="fas fa-chevron-up"></i>
        </div>
        <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sed autem cum blanditiis quos possimus, ea inventore quis quam. Sit unde libero, architecto provident deleniti eligendi dolore nisi ipsum porro officiis maxime dicta ea nam ipsam nulla iusto exercitationem. Ipsam, quas adipisci veritatis officiis necessitatibus nihil inventore optio quia, sunt iusto quasi voluptas reiciendis minus velit qui numquam quae. Exercitationem!</p>
      </div>
      {/* <div className={`${styles.logement_equipement}`}>
      <div className={`d-flex a-i-c j-c-sb ${styles.equipementTitle}`} >
        <h4>Equipememnt</h4>
        <i className="fas fa-chevron-up"></i>
      </div>
      <ul>
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Fer à repasser</li>
        <li>Séche cheveux</li>
        <li>Cintres</li>

      </ul>

    </div> */}
    </div>
  )
}

export default Collapse