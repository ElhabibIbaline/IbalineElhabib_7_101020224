
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
        <p>numquam laborum repellat . Laudantium eum atque corporis saepe quibusdam. Voluptatibus aliquid ipsum quia cumque temporibus recusandae repudiandae suscipit similique!</p>
      </div>

    </div>
  )
}

export default Collapse