import { Github, ExternalLink, Code2, Layers, Calendar, X } from 'lucide-react';

const ProjectCard = ({ 
  category = "Web Development",
  title = "E-commerce Platform",
  description = "Una plataforma moderna de comercio electrónico con gestión de inventario en tiempo real",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  technologies = ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  repoUrl = "https://github.com/omarto300/codewars",
  demoUrl = "https://demo.proyecto.com",
  date = "2024",
  longDescription = "Este proyecto implementa una solución completa de e-commerce con características avanzadas como carrito de compras, procesamiento de pagos, gestión de usuarios y panel de administración. Utiliza arquitectura moderna con microservicios y está optimizado para rendimiento y escalabilidad."
}) => {

  const techColors = {
    "React": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Vue": "bg-green-500/10 text-green-600 dark:text-green-400",
    "Angular": "bg-red-500/10 text-red-600 dark:text-red-400",
    "Node.js": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    "Java": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    "JavaScript": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    "TypeScript": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Python": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "MongoDB": "bg-green-500/10 text-green-600 dark:text-green-400",
    "PostgreSQL": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    "Tailwind CSS": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    "Spring Boot": "bg-green-500/10 text-green-600 dark:text-green-400"
  };

  const getTechColor = (tech) => {
    return techColors[tech] || "bg-gray-500/10 text-gray-600 dark:text-gray-400";
  };

  return (
    <>
      <div
        className={"w-full px-4 md:w-1/2 xl:w-1/3"}
      >
        <div className="relative mb-12 group">
          <div className="overflow-hidden rounded-2xl relative">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="relative z-10 mx-4 -mt-24 rounded-2xl bg-white py-8 px-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-violet-500 to-purple-500 text-white">
                <Layers className="w-3 h-3" />
                {category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            <button
              onClick={() => window.open(repoUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-violet-500 bg-violet-500 py-2.5 px-6 text-sm font-semibold text-white transition-all hover:bg-violet-600 hover:border-violet-600 hover:shadow-lg hover:shadow-violet-500/30 active:scale-95"
            >
              <Code2 className="w-4 h-4" />
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;