// src/router.jsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";
import { logementLoader } from "./pages/Logement/loader";

export const router = createBrowserRouter([
  {
    element: <Outlet />,
    hydrateFallbackElement: <></>,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "a-propos", element: <About /> },
      {
        path: "logement/:id",
        element: <Logement />,
        loader: logementLoader,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
