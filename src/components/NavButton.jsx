import { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import PortafolioIcon from "../icons/Portafolio";
import TecnologiaIcon from "../icons/TecnologiaIcon";
import ExperienciaIcon from "../icons/ExperienciaIcon";
import ContactoIcon from "../icons/ContactoIcon";

export default function NavButton({ onClick, active = false , page }) {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (name) => {
    switch (name) {
      case "home":
        return <HomeIcon variant={isHovered && !active ? 'hover' : 'default'} />;
      case "projects": 
        return <PortafolioIcon variant={isHovered && !active ?  'hover' : 'default'} />;
      case "tecnologias": 
        return <TecnologiaIcon variant={isHovered && !active ?  'hover' : 'default'}/>;
      case "experience":
        return <ExperienciaIcon variant={isHovered && !active ? 'hover' : 'default'} />;
      case "contact":
        return <ContactoIcon variant={isHovered && !active ?  'hover' : 'default'} />;
      default:
        return null; 
    }
  }
    return (
      <li
        className={`rounded-full p-2 cursor-pointer w-15 h-15 ${active ? 'bg-background' : 'hover:bg-primary'}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getIcon(page.name)}
      </li>
    );
}
