import backendImage from "../assets/code_backend.png";
import frontendImage from "../assets/code_frontend.png";
import microservicesImage from "../assets/code_microservices.png";
import developmentImage from "../assets/codeando.png";

const images = { backend: backendImage, frontend: frontendImage , microservices: microservicesImage, development: developmentImage };

const PortfolioCard = ({ showCard, category, title, button, buttonHref }) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={images[category.toLowerCase()]}
              alt="portfolio"
              className="w-full"
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-2xl dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-gray-500 dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
