import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
// import Main from "../../components/Main/Main"
import image from '../../assets/background/banner.png';

function Home() {
  return (
    <>
      <Header />
      {/* <Main/> */}
      <Banner image={image} text="Chez vous, partout et ailleurs" />
      <Footer />

    </>
  )
}

export default Home
