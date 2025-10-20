import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";
import { logementLoader } from "./pages/Logement/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "a-propos", element: <About /> },
      {
        path: "logement/:id",
        element: <Logement />,
        loader: logementLoader,
        errorElement: <NotFound />, // si l'ID n'existe pas → 404
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);



