import Banner from "../../components/Banner/Banner"
import image from '../../assets/background/banner.png'
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './Homepage.module.scss'

function Home() {
  return (
    <div>
      <Header />
      
      <div className={styles.main} >
        <Banner image={image} text="Chez vous, partout et ailleurs" />
        <Gallery />
      </div>

      <Footer />
    </div>
  )
}

export default Home
