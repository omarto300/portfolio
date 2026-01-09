import ProjectCard from './feactures/ProjectCard';
// Ejemplo de uso con múltiples proyectos
export default function Portfolio() {
  const projects = [
    {
      category: "Web Development",
      title: "E-commerce Platform",
      description: "Una plataforma moderna de comercio electrónico con gestión de inventario en tiempo real",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      repoUrl: "https://github.com/usuario/ecommerce",
      demoUrl: "https://demo.proyecto.com",
      date: "2024",
      longDescription: "Este proyecto implementa una solución completa de e-commerce con características avanzadas como carrito de compras, procesamiento de pagos, gestión de usuarios y panel de administración. Utiliza arquitectura moderna con microservicios y está optimizado para rendimiento y escalabilidad."
    },
    {
      category: "Backend",
      title: "API REST con Spring Boot",
      description: "Sistema de gestión empresarial con arquitectura hexagonal y microservicios",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      repoUrl: "https://github.com/usuario/api-rest",
      demoUrl: "https://api.proyecto.com/docs",
      date: "2023",
      longDescription: "API RESTful robusta construida con Spring Boot siguiendo principios SOLID y clean architecture. Incluye autenticación JWT, documentación con Swagger, testing completo y CI/CD con Docker y Kubernetes."
    },
    {
      category: "Frontend",
      title: "Dashboard Analytics",
      description: "Panel de control interactivo para visualización de datos en tiempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Vue", "TypeScript", "Chart.js", "Tailwind CSS"],
      repoUrl: "https://github.com/usuario/dashboard",
      demoUrl: "https://dashboard.proyecto.com",
      date: "2024",
      longDescription: "Dashboard moderno con gráficos interactivos, filtros avanzados y actualizaciones en tiempo real usando WebSockets. Diseñado con principios de UX/UI para ofrecer la mejor experiencia de usuario."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}