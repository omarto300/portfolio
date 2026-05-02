// Componente Button mejorado
const Button = ({ children, variant = "primary", icon: Icon,onClick }) => {
  
  const variants = {
    primary: "bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
  };
  
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} cursor-pointer px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};
export default Button;