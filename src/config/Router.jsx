
import { createBrowserRouter } from "react-router-dom";

import Layout from './Layout.jsx'
import Homepage from "../pages/Homepage/Homepage.jsx";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";
import Logement from "../pages/Logement/Logement.jsx";
import About from "../pages/About/About.jsx";

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "logement", element: <Logement /> },
      { path: "", element: <PageNotFound /> }
    ],
  }
])
export default Router

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "/accueil",
//     element: <Homepage />,
//   },
//   {
//     path: "/logement",
//     element: <Logement />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "*",
//     element: <PageNotFound />,
//   },
// ]);

// export default Router