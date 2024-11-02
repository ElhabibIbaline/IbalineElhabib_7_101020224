
import './PageNotFound.module.scss'
// import Header from "../../components/Header/Header"
// import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      {/* <Header /> */}
      < div className='errorPage'>
        <h1>404 </h1>
        <h2> Oups! La page que vous demandez n existe pas</h2>

        <p> <Link to="/"> Retourner sur la page d’accueil </Link></p>



      </div>
      {/* <Footer /> */}
    </>
  )
}

export default PageNotFound
