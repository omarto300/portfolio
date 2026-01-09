import NavButton from "./NavButton";
import { useState } from "react";
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";
const pages = [
  { name: "home",label: "Inicio", icon: Home },
  { name: "projects" ,label: "Proyectos", icon: User},
  { name: "experience",label: "Experience", icon: Code },
  { name: "contact",label: "Contacto", icon: Mail },
];

export default function Navbar({ handleNavigation }) {
  const [activeTab, setActiveTab] = useState(pages[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActiveTab(page);
    handleNavigation(page);
  };

  return (
    <>
      <nav className="bg-white shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0">
              <div className="relative overflow-visible">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 transform -skew-x-12 rounded-lg"></div>
                <h1 className="relative text-2xl font-black text-white px-6 py-2 z-10">
                  OS
                </h1>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {pages.map((item) => (
                <NavButton
                  key={item.name}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeTab === item.name}
                  onClick={() => handleClick(item.name)}
                />
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {pages.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full relative group overflow-visible"
                >
                  <div
                    className={`
                      absolute inset-0 transform -skew-x-12 transition-all duration-300 rounded-md
                      ${
                        activeTab === item.id
                          ? "bg-linear-to-r from-blue-600 to-purple-600"
                          : "bg-gray-100 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-purple-500"
                      }
                    `}
                  ></div>
                  <div className="relative flex items-center gap-3 px-6 py-3 z-10">
                    <item.icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        activeTab === item.name
                          ? "text-white"
                          : "text-gray-700 group-hover:text-white"
                      }`}
                    />
                    <span
                      className={`font-semibold transition-colors duration-300 ${
                        activeTab === item.name
                          ? "text-white"
                          : "text-gray-700 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
