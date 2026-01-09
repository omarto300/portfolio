import { Github, ExternalLink, Code2, Layers, Calendar, X } from 'lucide-react';

export default function ProjectDetail() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-3">
              <Layers className="w-3 h-3" />
              {category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {longDescription}
          </p>

          {/* Tecnologías */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-violet-500" />
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 py-3 px-6 text-sm font-semibold text-gray-700 dark:text-white transition-all hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-slate-600 hover:text-violet-600 dark:hover:text-violet-400"
            >
              <Github className="w-4 h-4" />
              Ver Repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
