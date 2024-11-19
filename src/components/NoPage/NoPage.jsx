import { useNavigate } from "react-router-dom";
import styles from './NoPage.module.scss';

export default function NoPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorNumber}>404</p>
      <p className={styles.errorMessage}>
      {`Oups! La page que vous demandez n'existe pas.`}
      </p>
      <button onClick={() => navigate("/")} className={styles.backButton}>
      {`Retourner sur la page d'accueil`}
      </button>
    </div>
  );
}
