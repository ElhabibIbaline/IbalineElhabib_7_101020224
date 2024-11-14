import { createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import About from "./pages/About/About.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    // path: "/logement",
    path: "/logement/:logementId",
    element: <Logement />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
],

);

export default Router;

