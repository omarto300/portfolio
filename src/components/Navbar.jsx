import portafolio from "../assets/portafolio.svg";
import home from "../assets/home.svg";
import tecnologias from "../assets/tecnologias.svg";
import experiencia from "../assets/experiencia.svg";
import contacto from "../assets/contacto.svg";
import NavButton from "./NavButton";

export default function Navbar({ handleNavigation }) {
  const handleClick = (page) => {
    handleNavigation(page);
  };

  return (
    <nav className="absolute -left-20 top-1/2 transform -translate-y-1/2 p-0 rounded-2xl bg-white shadow-lg">
      <ul className="m-0 px-2 list-none flex flex-col items-center">
        <li className="w-full">
          {
            <NavButton
              onClick={() => handleClick("home")}
              icon={home}
              altText="Inicio"
            />
          }
        </li>
        <li>
          <NavButton
            onClick={() => handleClick("projects")}
            icon={portafolio}
            altText="Proyectos"
          />
        </li>
        <li>
          <NavButton
            onClick={() => handleClick("tecnologias")}
            icon={tecnologias}
            altText="Tecnologias"
          />
        </li>
        <li>
          <NavButton
            onClick={() => handleClick("experience")}
            icon={experiencia}
            altText="Experiencia"
          />
        </li>
        <li>
          <NavButton
            onClick={() => handleClick("contact")}
            icon={contacto}
            altText="Contacto"
          />
        </li>
      </ul>
    </nav>
  );
}
