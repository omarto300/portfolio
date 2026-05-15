import { Github, ExternalLink, Code2, Layers, Calendar } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  category,
  repoUrl,
  demoUrl,
  date,
  featured,
}) => {
  const hasButtons = repoUrl || demoUrl;

  return (
    <div className="rounded-2xl shadow-lg bg-white overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Image section */}
      <div className="relative h-48 overflow-hidden bg-gray-100 shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-12 h-12 text-gray-300" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
            Destacado
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category + date */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            <Layers className="w-3 h-3" />
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        {hasButtons && (
          <div className="mt-auto flex gap-2">
            {repoUrl && (
              <button
                onClick={() => window.open(repoUrl, '_blank')}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-gray-900 py-2.5 px-4 text-sm font-semibold text-white hover:bg-gray-800 hover:border-gray-800 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                Código
              </button>
            )}
            {demoUrl && (
              <button
                onClick={() => window.open(demoUrl, '_blank')}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 py-2.5 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Demo
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
