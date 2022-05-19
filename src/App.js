import { Routes, Route } from "react-router-dom";
import { NavList } from "./components/NavList";
import { SomeList } from "./pages/SomeList";
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
        <Route path="/some-list" element={<SomeList />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
