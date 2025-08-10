const currentYear = new Date().getFullYear();
const experiences = [
  { year: currentYear, title: "Actualidad", description: "Desarrollador Backend Senior, mentor y arquitecto de soluciones." },
  { year: 2022, title: "Liderazgo de equipo", description: "Lideré un equipo de desarrollo en proyectos empresariales." },
  { year: 2020, title: "Especialización Backend Java", description: "Me especialicé en backend con Java y Spring Boot." },
  { year: 2018, title: "Primer trabajo profesional", description: "Desarrollador Junior en empresa de tecnología." },
  { year: 2016, title: "Inicio en desarrollo", description: "Comencé mi carrera en desarrollo de software." }
];

export default function ExperiencePage() {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-8">EXPERIENCIA PROFESIONAL</h2>
      <div className="relative flex flex-col items-center mx-auto">
        {/* Línea vertical */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-primary -translate-x-1/2 z-0"></div>
        {/* Flecha en la parte superior */}
        <div className="absolute left-1/2 -top-4 -translate-x-1/2 z-10">
          <svg width="48" height="48" viewBox="0 0 24 24">
            <polygon points="12,0 20,12 4,12" fill="#000814" />
          </svg>
        </div>
        {experiences.map((exp, idx) => (
          <div
            key={exp.year}
            className={`flex w-full relative mb-4 ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}
          >
            {/* Card */}
            <div className={`w-[calc(50%-30px)] z-10 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
                <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            </div>
            {/* Circulo con fecha */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary border-2 border-white rounded-full z-20 shadow text-white font-bold text-xs text-center">
              {exp.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
