// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/404" element={<NotFound />} />  {/* ✅ page d’erreur */}
        <Route path="*" element={<NotFound />} />     {/* ✅ attrape-tout */}
      </Routes>
    </BrowserRouter>
  );
}





