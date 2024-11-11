
import { createBrowserRouter } from "react-router-dom";

import Layout from './Layout/Layout.jsx'
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/ErrorPage/ErrorPage.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import About from "./pages/About/About.jsx";

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "logement", element: <Logement /> },
      { path: "*", element: <PageNotFound /> }
    ],

  }
],
  // {
  //   future: {
  //     v7_partialHydration: true
  //   }
  // }

)
export default Router