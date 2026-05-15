import { useState } from 'react';
import { Code2 } from 'lucide-react';
import ProjectCard from './features/ProjectCard';
import projects from '../data/projects';

const CATEGORIES = ['Todos', 'Web', 'Backend', 'Freelance', 'Algoritmos'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-8 h-8 text-gray-800 shrink-0" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              Proyectos
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Algunos de los proyectos que he desarrollado</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mb-6">
          {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-400">
              <Code2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-lg">No hay proyectos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
