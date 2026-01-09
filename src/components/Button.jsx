// Componente Button mejorado
const Button = ({ children, variant = "primary", icon: Icon,onClick }) => {
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${variants[variant]} px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};
export default Button;