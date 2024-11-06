import { NavLink } from "react-router-dom";
import styles from './NoPage.module.scss'

export default function NoPage() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.container_number}>404</p>
        <p className={styles.container_text}>
          Oups! La page que vous demandez nexiste pas.
        </p>
        <NavLink to="/" className={styles.container_link}>
          <p>Retourner sur la page d accueil</p>
        </NavLink>
      </div>
    </>
  );
}
