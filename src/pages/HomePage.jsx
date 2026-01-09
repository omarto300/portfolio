import {
  Download,
  Linkedin,
  Github,
  Code,
  Database,
  Cloud,
  Users,
  TestTube,
  Wrench,
  Rocket,
} from "lucide-react";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import StatCard from "../components/StatCard";

export default function DeveloperPortfolio() {
  
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className=" bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 overflow-hidden relative">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Imagen de perfil */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar"
                  alt="Omar Sanchez Santiago"
                  className="relative rounded-full shadow-2xl border-4 border-white w-64 h-64 object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Omar Sanchez Santiago
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
                  Desarrollador Backend
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desarrollador con más de{" "}
                  <span className="font-semibold text-blue-600">
                    8 años de experiencia
                  </span>{" "}
                  especializado en Java, JavaScript y SQL. Experto en diseñar e
                  implementar arquitecturas escalables, desde monolitos hasta
                  microservicios, utilizando protocolos de comunicación como
                  REST, AMQP y WebSockets.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon={Download}>
                  Descargar CV
                </Button>
                <Button variant="outline" icon={Linkedin}>
                  LinkedIn
                </Button>
                <Button variant="outline" icon={Github}>
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12">
            <StatCard label="Proyectos" value="5+" icon={Rocket} />
            <StatCard label="Años de Experiencia" value="8+" icon={Code} />
            <StatCard label="Tecnologías" value="10+" icon={Database} />
          </section>
        </section>
      </div>
    </div>
  );
}
