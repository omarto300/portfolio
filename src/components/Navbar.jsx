import NavButton from "./NavButton";
import { useState, useEffect } from "react";
import { Home, User, Code, Mail, Menu, X } from "lucide-react";

const pages = [
  { name: "home", label: "Inicio", icon: Home },
  { name: "projects", label: "Proyectos", icon: User },
  { name: "experience", label: "Experience", icon: Code },
  { name: "contact", label: "Contacto", icon: Mail },
];

export default function Navbar({ handleNavigation, activePage }) {
  const activeTab = activePage;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleClick = (page) => {
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
                <div className="absolute inset-0 bg-linear-to-r from-gray-900 to-gray-600 transform -skew-x-12 rounded-lg"></div>
                <h1 translate="no" className="relative text-2xl font-black text-white px-6 py-2 z-10">
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
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-0 flex flex-col px-8 py-10">
            {/* Top row: logo + close */}
            <div className="flex items-center justify-between mb-16">
              <div className="relative overflow-visible">
                <div className="absolute inset-0 bg-linear-to-r from-gray-100 to-gray-400 transform -skew-x-12 rounded-lg"></div>
                <span translate="no" className="relative text-2xl font-black text-gray-900 px-6 py-2 z-10 block">
                  OS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-3">
              {pages.map((item, index) => {
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleClick(item.name);
                    }}
                    style={{ animationDelay: `${index * 60}ms` }}
                    className={`
                      group flex items-center gap-5 w-full px-6 py-5 rounded-2xl
                      transition-all duration-200 cursor-pointer text-left
                      animate-[fadeSlideIn_0.3s_ease_both]
                      ${isActive
                        ? "bg-white text-gray-900 shadow-lg"
                        : "bg-white/8 text-white hover:bg-white/15"
                      }
                    `}
                  >
                    <span className={`p-2 rounded-xl transition-colors ${isActive ? "bg-gray-900 text-white" : "bg-white/10 text-gray-300 group-hover:bg-white/20"}`}>
                      <item.icon size={20} />
                    </span>
                    <span className={`text-xl font-semibold tracking-wide ${isActive ? "text-gray-900" : "text-white"}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-gray-900" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Footer hint */}
            <p className="mt-auto text-center text-white/30 text-sm">
              Omar Sanchez Santiago
            </p>
          </div>
        </div>
      )}
    </>
  );
}
