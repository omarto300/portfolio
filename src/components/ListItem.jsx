const ListItem = ({ text, icon: Icon }) => (
  <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
    <div className="mt-1 flex-shrink-0">
      <Icon size={20} className="text-blue-600" />
    </div>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default ListItem;