// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>© Kasa 2025</footer>
    </>
  );
}



