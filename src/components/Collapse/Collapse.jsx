
import { useState } from 'react'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {

  const [isOpen, setIsopen] = useState(false)

  const display = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className={` d-flex j-c-c j-c-sb flex-column ${styles.collapse}`}>


      <div className={` d-flex a-i-c j-c-sb ${styles.descriptionTitle}`} >
        <h4>{title} </h4>
        <div onClick={display}>
          {isOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (<i className="fas fa-chevron-down"></i>)}
        </div>
      </div>

      <div>
        {isOpen && <p> {content} </p>}
      </div>

    </div>
  )
}

export default Collapse