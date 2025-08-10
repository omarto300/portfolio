import imageReact from "../assets/heroImage.png";
import Habilidades from "../components/Habilidades";
import ListItem from "../components/ListItem";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center p-6">
        <section className="relative w-full h-1/2 mb-4">
          <img
            src={imageReact}
            alt="Profile"
            className="rounded-lg w-1/3 object-cover"
          />
          <div className="w-3/5 lg:w-7/10 absolute right-2 top-1/2 transform -translate-y-1/3 bg-white p-4 rounded shadow-lg">
            <h1 className="text-3xl font-black">
              Hola, soy Omar Sanchez Santiago
            </h1>
            <p className="font-light">
              Desarrollador con mas de 8 años de experiencia con lenguajes como
              Java, Javascript, SQL, Bases de datos no relacionales, tambien he
              implementado diferentes arquitecturas como monolitos y
              microservicios basadas en comunicaciones como REST,AMQP y
              WebSockets.
            </p>
            <button className="bg-blue-600 text-white rounded-3xl p-2 mt-2">
              Ver Proyectos
            </button>
          </div>
        </section>
        <section className="w-full mb-4 shadow-lg p-6 bg-white rounded-lg flex justify-around items-center">
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
            <h2 className="text-2xl mb-4 font-semibold text-center">Actividades principales</h2>
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
