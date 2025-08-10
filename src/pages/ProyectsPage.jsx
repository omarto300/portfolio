import React from "react";
import Portfolio from "../components/Portfolio";

const projects = [
  {
    title: "Gestor de Tareas",
    description: "Aplicación web para gestionar tareas con autenticación y notificaciones.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/usuario/gestor-tareas"
  },
  {
    title: "E-commerce",
    description: "Tienda online con carrito, pagos y panel de administración.",
    tech: ["Vite", "Express", "PostgreSQL"],
    link: "https://github.com/usuario/e-commerce"
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web para mostrar proyectos y experiencia profesional.",
    tech: ["React", "CSS"],
    link: "https://github.com/usuario/portfolio"
  }
];

export default function Proyects() {
  return (
    <Portfolio />
  );
}
