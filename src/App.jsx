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
      <div className="w-full h-screen display flex justify-center items-center bg-gray-500">
        <div className="shadow w-full md:w-4/6 h-11/12 relative rounded-3xl bg-white p-3">
          {<Navbar handleNavigation={handleNavigation} />}
          <div className="h-full ml-10">
            <div className="overflow-x-hidden overflow-y-auto h-full">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
