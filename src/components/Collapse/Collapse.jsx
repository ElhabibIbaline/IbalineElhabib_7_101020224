
//Le hook useState est utilisé ici pour gérer l’état d’ouverture/fermeture du composant.
import { useState } from 'react'
import styles from './Collapse.module.scss'

function Collapse({ title, content }) {

  // isOpen : Variable d’état qui détermine si le composant est ouvert (true) ou fermé (false).
  // setIsopen : Fonction pour mettre à jour l’état.
  const [isOpen, setIsopen] = useState(false)  // Valeur initiale : false (le composant est fermé par défaut).

  const toggleCollapse = () => { //toggleCollapse : Fonction qui inverse la valeur actuelle de isOpen (ouvre si fermé, ferme si ouvert).
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

{/* Le contenu est affiché uniquement si isOpen est true. */}
      {isOpen && (<div className={`${styles.collapse_content}`}>
        <p>{content}</p>
      </div>)
      }
    </div>

  )
}

export default Collapse

