import { Github, ExternalLink, Code2, Layers, Calendar } from 'lucide-react';

const ProjectCard = ({
  category = "Web Development",
  title = "E-commerce Platform",
  description = "Una plataforma moderna de comercio electrónico con gestión de inventario en tiempo real",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  technologies = ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  repoUrl = "https://github.com/omarto300/codewars",
  demoUrl = "",
  date = "2024",
  longDescription = "Este proyecto implementa una solución completa de e-commerce con características avanzadas como carrito de compras, procesamiento de pagos, gestión de usuarios y panel de administración. Utiliza arquitectura moderna con microservicios y está optimizado para rendimiento y escalabilidad."
}) => {

  const getTechColor = () => "bg-gray-100 text-gray-700";

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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-gray-900 to-gray-600 text-white">
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
                <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.open(repoUrl, "_blank")}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-gray-900 py-2.5 px-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:border-gray-800 hover:shadow-lg hover:shadow-gray-900/20 active:scale-95 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                Código
              </button>
              {demoUrl && (
                <button
                  onClick={() => window.open(demoUrl, "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 py-2.5 px-4 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-50 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
