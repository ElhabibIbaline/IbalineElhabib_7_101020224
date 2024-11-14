import { createBrowserRouter, Navigate  } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import About from "./pages/About/About.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate replace to="/accueil" />,
  },
  {
    path: "/accueil",
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
  {
    future: { v7_relativeSplatPath: true }, // Activation du future flag pour les routes splat
  }
);

export default Router;

