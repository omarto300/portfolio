import React from 'react';
import { Briefcase, Code, Clock, Building2, Layers } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "IDS (Banamex)",
      position: "Desarrollador Backend",
      period: "Febrero 2023 - Julio 2025",
      responsibilities: [
        "Creación y modificación de microservicios para el área de apertura de cuentas de Banamex",
        "Integración de servicios backend mediante APIs REST y SOAP",
        "Migración de módulos desde aplicaciones monolíticas hacia microservicios",
        "Refactorización de código para reducir deuda técnica y cumplir estándares de calidad y seguridad"
      ],
      achievements: [
        "Integración de Apache Maven en proyectos sin gestor de dependencias para facilitar despliegues continuos",
        "Implementación de arquitectura hexagonal y comunicación REST para mejorar escalabilidad",
        "Cobertura de código con pruebas unitarias e integración usando Spock"
      ],
      technologies: ["Java", "Spring Boot", "REST", "SOAP", "Maven", "Spock", "Docker", "Kubernetes"]
    },
    {
      company: "Banco Azteca",
      position: "Líder Técnico",
      period: "Junio 2021 - Marzo 2023",
      responsibilities: [
        "Asignación de requerimientos al equipo según experiencia y prioridad",
        "Análisis de requerimientos para estimación y cualificación de esfuerzos",
        "Revisión de código y aprobación de pull requests",
        "Versionamiento e implementación de cambios en ambientes QA y producción"
      ],
      achievements: [
        "Diseño e implementación de arquitectura de microservicios con Spring Cloud, Gateway, Eureka, Config, Feign y WebClient",
        "Optimización de flujos batch mediante concurrencia, reduciendo ejecuciones de 1 hora a 10-15 minutos",
        "Mejora de cobertura de pruebas con JUnit y análisis estático con SonarQube",
        "Desarrollo de capa de acceso a datos en Oracle y SQL Server"
      ],
      technologies: ["Java", "Spring Cloud", "Gateway", "Eureka", "Feign", "WebClient", "JUnit", "SonarQube", "Oracle", "SQL Server", "Docker", "Kubernetes", "Argo"]
    },
    {
      company: "ThTec",
      position: "Desarrollador Backend",
      period: "Abril 2020 - Junio 2021",
      responsibilities: [
        "Desarrollo de nuevos módulos backend con EJB",
        "Creación de interfaces web con PrimeFaces",
        "Modelado y consumo de datos con JDBC y pool de conexiones",
        "Despliegue de aplicaciones en servidores JBoss"
      ],
      achievements: [
        "Automatización de reportes ejecutivos dinámicos con Apache POI",
        "Implementación de seguridad con EJB Security y control de acceso por roles",
        "Integración con base de datos Oracle"
      ],
      technologies: ["Java", "EJB", "PrimeFaces", "JDBC", "Oracle", "Apache POI", "EJB Security", "JBoss"]
    }
  ];

  return (
    <div className="p-4 sm:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-8 h-8 text-gray-800 shrink-0" />
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Experiencia Profesional</h1>
          </div>
          <p className="text-slate-600 text-lg mb-5">Trayectoria como desarrollador backend Java</p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              8+ Años de experiencia
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
              <Building2 className="w-4 h-4 text-gray-500" />
              3 Empresas
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
              <Layers className="w-4 h-4 text-gray-500" />
              Java / Backend
            </span>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-4 sm:p-8">
                {/* Company Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">
                      {exp.company}
                    </h2>
                    <p className="text-xl text-gray-800 font-semibold">
                      {exp.position}
                    </p>
                  </div>
                  <span className="self-start text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-3">
                    Funciones
                  </h3>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-gray-500 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-3">
                    Logros Destacados
                  </h3>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-gray-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-slate-600" />
                    <h3 className="text-lg font-semibold text-slate-700">
                      Tecnologías
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
