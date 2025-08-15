import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ListUsers from "./pages/ListUsers";
import Layout from "./styles/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lista-de-usuarios",
        element: <ListUsers />,
      },
    ],
  },
]);

export default router;
