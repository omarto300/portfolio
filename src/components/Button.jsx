export default function Button({ onClick, children,variant = "inacttive" }) {
  const variants = {
    active: "bg-text",
    inacttive: "text-gray-500 dark:text-dark-6 hover:bg-primary hover:text-white",
  }
  return (
    <button
      onClick={onClick}
      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}