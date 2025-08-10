import React from "react";
import Habilidades from "../components/Habilidades";

const tecnologiasBackendJava = [
  {
    categoria: "Lenguajes",
    items: ["Java", "Kotlin", "Groovy"]
  },
  {
    categoria: "Frameworks",
    items: ["Spring Boot", "Quarkus", "Jakarta EE"]
  },
  {
    categoria: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"]
  },
  {
    categoria: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "Git", "Maven", "Gradle"]
  },
  {
    categoria: "Testing",
    items: ["JUnit", "Mockito", "TestNG","Spock"]
  },
  {
    categoria: "Cloud",
    items: ["AWS"]
  }
];

export default function TecnologiasPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="text-2xl font-bold text-center">Tecnologias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tecnologiasBackendJava.map((grupo, idx) => (
          <div key={idx} className="p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold">{grupo.categoria}</h3>
            <ul className="list-disc pl-5 mt-2">
              {grupo.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Habilidades />
    </div>
  );
}
