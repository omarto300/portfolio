import React, { useState } from "react";
import Button from "./Button";
import PortfolioCard from "./PortfolioCard";
import proyectos from "../data/proyects";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-10 pb-12 lg:pt-[30px] lg:pb-[40px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Mis proyectos
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Aquí puedes ver algunos de los proyectos en los que he
                  trabajado, cada uno con su propia tecnología y enfoque. Haz
                  clic en "Ver Detalles" para más información.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <Button
                    onClick={() => handleProject("all")}
                    variant={showCard === "all" ? "active" : "inacttive"}
                  >
                    Todos
                  </Button>
                </li>
                <li className="mb-1">
                  <Button
                    onClick={() => handleProject("backend")}
                    variant={showCard === "backend" ? "active" : "inacttive"}
                  >
                    Backend
                  </Button>
                </li>
                <li className="mb-1">
                  <Button
                    onClick={() => handleProject("frontend")}
                    variant={showCard === "frontend" ? "active" : "inacttive"}
                  >
                    Frontend
                  </Button>
                </li>
                <li className="mb-1">
                  <Button
                    onClick={() => handleProject("microservices")}
                    variant={
                      showCard === "microservices" ? "active" : "inacttive"
                    }
                  >
                    Microservicios
                  </Button>
                </li>
                <li className="mb-1">
                  <Button
                    onClick={() => handleProject("development")}
                    variant={
                      showCard === "development" ? "active" : "inacttive"
                    }
                  >
                    Desarrollando
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {proyectos.map((proyecto, index) => (
              <PortfolioCard
                key={index}
                category={proyecto.category}
                title={proyecto.title}
                button="Ver Detalles"
                buttonHref="#"
                showCard={showCard}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
