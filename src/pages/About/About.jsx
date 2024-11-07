import Banner from "../../components/Banner/Banner"
import imageAbout from '../../assets/background/banner-backgound-about.png';
import Collapse from "../../components/Collapse/Collapse";
import styles from './About.module.scss'

function About() {

  const Fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes"
  const Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const Service = "Nos équipes se tiennent  votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const Securité = "La sécurité est la priorité de Kasa. Aussi bien pou nos hotes que les voyageurs, chaque logement correspond aux critéres de sécurité etablis par nos services. En laissant une note aussi bien à ll'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."

  return (

    <div>
      <Banner image={imageAbout} text="" />
      <div className={styles.about_collapse}>
        <Collapse title="Fiabilité" content={Fiabilité} />
        <Collapse title="Respect" content={Respect} />
        <Collapse title="Service" content={Service} />
        <Collapse title="Sécurité" content={Securité} />
      </div>
    </div>

  )
}

export default About