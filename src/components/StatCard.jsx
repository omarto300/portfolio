const StatCard = ({ label, value, icon: Icon }) => (
  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <Icon size={32} className="mx-auto mb-3 text-blue-600" />
    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-2">{label}</h3>
    <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{value}</p>
  </div>
);
export default StatCard;