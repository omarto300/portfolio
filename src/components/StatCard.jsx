const StatCard = ({ label, value, icon: Icon, onClick }) => (
  <div
    onClick={onClick}
    className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1${onClick ? " cursor-pointer" : ""}`}
  >
    <Icon size={32} className="mx-auto mb-3 text-gray-700" />
    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">{label}</h3>
    <p className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">{value}</p>
  </div>
);
export default StatCard;