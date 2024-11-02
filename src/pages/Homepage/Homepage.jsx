import Banner from "../../components/Banner/Banner"
// import Footer from "../../components/Footer/Footer"
// import Header from "../../components/Header/Header"
import image from '../../assets/background/banner.png';
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <>
      {/* <Header /> */}

      <Banner image={image} text="Chez vous, partout et ailleurs" />
      <div className={`my-20`}>
        <Gallery />
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default Home
