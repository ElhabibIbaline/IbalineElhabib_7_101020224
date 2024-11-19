import { createBrowserRouter, Navigate } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import About from "./pages/About/About.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/accueil" />,
  },
  {
    path: "/accueil",
    element: <Homepage />,
  },
  {
    // Route dynamique /logement/:logementId affiche le composant Logement
    path: "/logement/:logementId",
    element: <Logement />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    // Capture toutes les routes non définies et affiche le composant ErrorPage.
    path: "*",
    element: <ErrorPage />,
  },
],

  { // Activation du future flag pour les routes splat
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default Router;

