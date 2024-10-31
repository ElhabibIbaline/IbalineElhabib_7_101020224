
import { useState } from 'react'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {

  const [isOpen, setIsopen] = useState(false)

  const display = () => {
    setIsopen(!isOpen);
  };

  return (


    <div className={`${styles.collapse_container}`}>
      <div className={`${styles.collapse_title}`}>
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </p>
      </div>

      <div className={`${styles.collapse_content}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>

  )
}

export default Collapse

