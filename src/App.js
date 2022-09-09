import { Routes, Route } from "react-router-dom";
import { NavList } from "./components/NavList";
import { Store } from "./pages/Store";
import { Portfolio } from "./pages/Portfolio";
import { HomePage } from "./pages/HomePage";
import Nav from "./components/data/Nav";



import "./App.css";
import "./css/reset.css";
import "./css/header.css";

function App() {
  const nav = new Nav();

  return (
    <>
      <NavList items={nav.links} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
