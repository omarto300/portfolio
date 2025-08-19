import NavButton from "./NavButton";
import { useState } from "react";

const pages = [
  { name: "home" },
  { name: "projects" },
  { name: "tecnologias" },
  { name: "experience" },
  { name: "contact" },
];

export default function Navbar({ handleNavigation }) {
  const [activePage, setActivePage] = useState(pages[0].name);

  const handleClick = (page) => {
    setActivePage(page);
    handleNavigation(page.name);
  };

  return (
    <nav
      className="
        fixed
        top-0 left-0 right-0
        w-full
        bg-white
        shadow-lg
        z-50
        rounded-none
        md:top-1/2 md:left-0 md:right-auto
        md:w-auto
        md:rounded-2xl
        md:transform md:-translate-y-1/2
      "
    >
      <ul
        className="
          flex flex-row items-center justify-center gap-2
          md:flex-col md:items-center md:gap-4
          m-0 px-2 py-1 list-none
        "
      >
        <NavButton
          onClick={() => handleClick(pages[0])}
          page={pages[0]}
          active={activePage.name === "home"}
        />
        <NavButton
          onClick={() => handleClick(pages[1])}
          page={pages[1]}
          active={activePage.name === "projects"}
        />
        <NavButton
          onClick={() => handleClick(pages[2])}
          page={pages[2]}
          active={activePage.name === "tecnologias"}
        />
        <NavButton
          onClick={() => handleClick(pages[3])}
          page={pages[3]}
          active={activePage.name === "experience"}
        />
        <NavButton
          onClick={() => handleClick(pages[4])}
          page={pages[4]}
          active={activePage.name === "contact"}
        />
      </ul>
    </nav>
  );
}
