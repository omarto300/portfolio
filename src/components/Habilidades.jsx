import reactImage from "../assets/react.svg";
import javaImage from "../assets/java.png";
import springBootImage from "../assets/springboot.png";
import springCloudImage from "../assets/springcloud.png";
import microservicesImage from "../assets/microservices.png";
import javascriptImage from "../assets/javascript.png";

const habilidades = [
  {
    name: "JavaScript",
    description:
      "Experiencia en desarrollo de aplicaciones web con JavaScript.",
    image: javascriptImage,
  },
  {
    name: "React",
    description: "Desarrollo de interfaces de usuario interactivas con React.",
    image: reactImage,
  },
  {
    name: "Java",
    description: "Desarrollo de aplicaciones con versiones Java 8, 11, 17, 21.",
    image: javaImage,
  },
  {
    name: "Spring Boot",
    description: "Desarrollo de aplicaciones backend con Spring Boot.",
    image: springBootImage,
  },
  {
    name: "Spring cloud",
    description: "Desarrollo de microservicios con Spring Cloud.",
    image: springCloudImage,
  },
   {
    name: "Microservicios",
    description: "Microservicios y arquitecturas distribuidas.",
    image: microservicesImage,
  },
];

export default function Habilidades() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Habilidades</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {habilidades.map((habilidad, index) => (
          <div key={index} className="p-4 rounded shadow-lg">
            <img
              src={habilidad.image}
              alt="React"
              className="w-8 h-8 mb-2 mx-auto"
            />
            <h2 className="text-lg font-semibold">{habilidad.name}</h2>
            <p className="text-md font-light">{habilidad.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
