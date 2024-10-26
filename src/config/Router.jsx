
import {
  createBrowserRouter,
} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.jsx";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";


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
    element: <h1>Logements</h1>,
  },
  {
    path: "/about",
    element: <h1> A propos </h1>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router