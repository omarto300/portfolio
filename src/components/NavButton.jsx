const NavButton = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group overflow-visible"
    >
      {/* Fondo con inclinación */}
      <div 
        className={`
          absolute inset-0 transform skew-x-[-12deg] transition-all duration-300 rounded-md
          ${isActive 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
            : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500'
          }
        `}
      ></div>
      
      {/* Contenido del botón (sin inclinación) */}
      <div className="relative flex items-center gap-2 px-6 py-3 z-10">
        <Icon 
          size={20} 
          className={`transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'
          }`}
        />
        <span 
          className={`font-semibold transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'
          }`}
        >
          {label}
        </span>
      </div>
      
      {/* Indicador inferior */}
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45 z-20"></div>
      )}
    </button>
  );
};

export default NavButton;