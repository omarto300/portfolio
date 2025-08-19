import imageReact from "../assets/heroImage.png";
import Button from "../components/Button";
import Habilidades from "../components/Habilidades";
import ListItem from "../components/ListItem";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <section className="relative">
          <img
            src={imageReact}
            alt="Profile"
            className="ml-2 mb-2 float-right rounded-full shadow-xl border-4 border-white"
            style={{
              width: "300px",
              height: "300px",
              imagePosition: "right",
              clipPath: "circle(50%)",
              shapeOutside: `circle(${300 / 2 + 2}px)`,
            }}
          />
          <div className="text-content">
            <h1 className="text-3xl font-black">
              Omar Sanchez Santiago
            </h1>
            <h2 className="text-2xl font-semibold text-gray-500">
              Desarrollador Backend
            </h2>
            <p className="font-light">
              Desarrollador con mas de 8 años de experiencia con lenguajes como
              Java, Javascript, SQL, Bases de datos no relacionales, tambien he
              implementado diferentes arquitecturas como monolitos y
              microservicios basadas en comunicaciones como REST,AMQP y
              WebSockets.
            </p>
            <div className="flex flex-col md:flex-row items-start justify-around md:items-center gap-2">
              <Button variant="active">
                Descargar CV
              </Button>
              <Button variant="active">
                Linkedin
              </Button>
              <Button variant="active">
                GitHub
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full my-6 p-6 bg-white rounded-lg flex justify-around items-center">
          <div>
            <h2 className="text-gray-400">Proyectos</h2>
            <p className="text-5xl font-extrabold">5+</p>
          </div>
          <div>
            <h2 className="text-gray-400">Experiencia</h2>
            <p className="text-5xl font-extrabold">8+</p>
          </div>
          <div>
            <h2 className="text-gray-400">Tecnologias</h2>
            <p className="text-5xl font-extrabold">10+</p>
          </div>
        </section>
        <div className="clear-both w-full">
          <div className="shadow-lg p-6 bg-white rounded-lg">
            <h2 className="text-2xl mb-4 font-semibold text-center">
              Actividades principales
            </h2>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ListItem text="Desarrollo de aplicaciones backend con Java y Spring Boot."></ListItem>
              <ListItem text="Implementación de APIs RESTful y servicios web."></ListItem>
              <ListItem text="Optimización de bases de datos SQL y NoSQL."></ListItem>
              <ListItem text="Automatización de procesos con herramientas DevOps."></ListItem>
              <ListItem text="Mentoría y liderazgo en equipos de desarrollo."></ListItem>
              <ListItem text="Diseño e implementación de pruebas unitarias y de integración."></ListItem>
              <ListItem text="Despliegue y gestión de aplicaciones en la nube (AWS)."></ListItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
