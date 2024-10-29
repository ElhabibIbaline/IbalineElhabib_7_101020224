import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import imageAbout from '../../assets/background/banner-backgound-about.png';
import Collapse from "../../components/Collapse/Collapse";
import styles from './About.module.scss'

function About() {
  return (
    <div>
      <Header />
      <Banner image={imageAbout} text="" />
      <div className={` d-flex flex-column mb-20 ${styles.collapse}`}>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
      <Footer />
    </div>
  )
}

export default About