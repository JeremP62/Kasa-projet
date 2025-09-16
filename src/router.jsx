import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },  // 👈 Home affiche la liste
      { path: "about", element: <About /> },
      { path: "logement/:id", element: <Logement /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

