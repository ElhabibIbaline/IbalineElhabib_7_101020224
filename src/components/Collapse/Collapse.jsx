
import { useState } from 'react'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {

  const [isOpen, setIsopen] = useState(false)

  const toggleCollapse = () => {
    setIsopen(!isOpen);
  };

  return (

    <div className={` ${styles.collapse_container} ${isOpen ? styles.open : ''}`}>

      <div className={styles.collapse_title} onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i className={`fas fa-chevron-down`}
          style={{
            transition: 'ease-in-out 0.5s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }} ></i>
      </div>

      {isOpen && (<div className={`${styles.collapse_content}`}>
        <p>{content}</p>
      </div>)
      }
    </div>

  )
}

export default Collapse

