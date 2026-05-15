import React from 'react';
import { Briefcase, Code, Clock, Building2, Layers } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "IDS Comercial",
      position: "Senior Java Developer",
      period: "Febrero 2023 - Julio 2025",
      responsibilities: [
        "Desarrollo de microservicios con Spring Boot y arquitectura hexagonal",
        "Implementación de APIs RESTful escalables",
        "Liderazgo técnico de equipo de 5 desarrolladores",
        "Code reviews y mentorías a desarrolladores junior"
      ],
      achievements: [
        "Reducción del 40% en tiempos de respuesta mediante optimización de queries",
        "Implementación exitosa de sistema de autenticación JWT",
        "Migración de monolito a microservicios sin downtime"
      ],
      technologies: ["Java 17", "Spring Boot", "Hibernate", "PostgreSQL", "Docker", "Kubernetes", "Redis", "RabbitMQ"]
    },
    {
      company: "Banco Azteca",
      position: "Java Lead Developer",
      period: "Marzo 2020 - Febrero 2023",
      responsibilities: [
        "Desarrollo de aplicaciones empresariales con Java EE",
        "Integración con sistemas legacy mediante APIs SOAP",
        "Optimización de rendimiento de base de datos",
        "Participación en diseño de arquitectura de soluciones"
      ],
      achievements: [
        "Desarrollo de módulo de reportes que procesaba 100k+ registros",
        "Implementación de caché distribuido mejorando performance 60%",
        "Automatización de procesos batch reduciendo errores manuales"
      ],
      technologies: ["Java 11", "Spring Framework", "Hibernate", "MySQL", "Maven", "JUnit", "Mockito", "Jenkins"]
    },
    {
      company: "TH Tec",
      position: "Java Developer",
      period: "Febrero 2019 - Febrero 2020",
      responsibilities: [
        "Desarrollo de funcionalidades backend para plataforma web",
        "Mantenimiento y corrección de bugs en código existente",
        "Creación de pruebas unitarias e integración",
        "Documentación técnica de APIs"
      ],
      achievements: [
        "Implementación de sistema de notificaciones en tiempo real",
        "Refactorización de módulo crítico mejorando mantenibilidad",
        "Contribución en reducción de deuda técnica del proyecto"
      ],
      technologies: ["Java 8", "Spring Boot", "JPA", "MongoDB", "Git", "REST APIs", "Swagger"]
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
          <p className="text-slate-600 text-lg mb-5">Trayectoria como desarrollador Java</p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              7+ Años de experiencia
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
