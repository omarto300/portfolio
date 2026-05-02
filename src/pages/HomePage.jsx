import {
  Download,
  Linkedin,
  Github,
  Code,
  Database,
  Rocket,
} from "lucide-react";
import profileImg from "../assets/profile-cartoon.png";
import Button from "../components/Button";
import StatCard from "../components/StatCard";

export default function DeveloperPortfolio({ handleNavigation }) {
  const handleDownload = () => {
    const pdfUrl = `${import.meta.env.BASE_URL}/CV_OMAR_SANCHEZ.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'OMAR_SANCHEZ_SANTIAGO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoPage = (linkPage) => {
    window.open(linkPage, '_blank');
  };

  const techStack = ["Java", "Spring Boot", "Node.js", "SQL", "Docker", "Microservicios"];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 mb-8 overflow-hidden relative">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Imagen de perfil */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-gray-900 to-gray-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
                <img
                  src={profileImg}
                  alt="Omar Sanchez Santiago"
                  className="relative rounded-full shadow-2xl border-4 border-white w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="md:col-span-2 space-y-5 text-center md:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent mb-2">
                  Omar Sanchez Santiago
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
                  Desarrollador Backend
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-gray-900 to-gray-400 rounded-full mb-4 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Desarrollador con más de{" "}
                  <span className="font-bold text-gray-900">
                    8 años de experiencia
                  </span>{" "}
                  especializado en Java, JavaScript y SQL. Experto en diseñar e
                  implementar arquitecturas escalables, desde monolitos hasta
                  microservicios, utilizando protocolos de comunicación como
                  REST, AMQP y WebSockets.
                </p>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="primary" icon={Download} onClick={handleDownload}>
                  Descargar CV
                </Button>
                <Button variant="outline" icon={Linkedin} onClick={() => handleGoPage('https://www.linkedin.com/in/omar920305/')}>
                  LinkedIn
                </Button>
                <Button variant="outline" icon={Github} onClick={() => handleGoPage('https://github.com/omarto300')}>
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-100 mt-10 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard label="Proyectos" value="5+" icon={Rocket} onClick={() => handleNavigation('projects')} />
              <StatCard label="Años de Experiencia" value="8+" icon={Code} onClick={() => handleNavigation('experience')} />
              <StatCard label="Tecnologías" value="10+" icon={Database} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
