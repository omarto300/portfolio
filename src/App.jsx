import { useState } from "react";
import Proyects from "./pages/ProyectsPage";
import HomePage from "./pages/HomePage";
import TecnologiasPage from "./pages/TecnologiasPage";
import ExperiencePage from "./pages/ExperiencePage";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "projects":
        return <Proyects />;
      case "tecnologias":
        return <TecnologiasPage />;
      case "experience":
        return <ExperiencePage />;
      case "contact":
        return <Contact />;
      default:
        return <h1>Bienvenido a mi portafolio</h1>;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {<Navbar handleNavigation={handleNavigation} />}
        {renderPage()}
      </div>
    </>
  );
}

export default App;
