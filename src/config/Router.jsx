
import {
  createBrowserRouter,
} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.jsx";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";
import Logement from "../pages/Logement/Logement.jsx";
import About from "../pages/About/About.jsx";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/accueil",
    element: <Homepage />,
  },
  {
    path: "/logement",
    element: <Logement />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router