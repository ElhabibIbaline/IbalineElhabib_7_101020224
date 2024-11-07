import Banner from "../../components/Banner/Banner"
import image from '../../assets/background/banner.png'
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div>
      <Banner image={image} text="Chez vous, partout et ailleurs" />
      <div >
        <Gallery />
      </div>
    </div>
  )
}

export default Home
