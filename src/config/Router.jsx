
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/accueil",
    element: <Home/>,
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
    element: <PageNotFound/>,
  },
]);

export default Router