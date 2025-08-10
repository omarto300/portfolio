export default function NavButton({ onClick, icon, altText }) {
  return (
    <button onClick={onClick} className="w-6 h-6 my-4 cursor-pointer">
      <img src={icon} alt={altText} className="w-full h-full" />
    </button>
  );
}