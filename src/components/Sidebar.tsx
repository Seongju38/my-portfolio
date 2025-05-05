import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail } from "lucide-react";

type SidebarProps = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

function Sidebar({ expanded, setExpanded }: SidebarProps) {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        h-screen bg-gray-900 text-white fixed top-0 left-0 z-50
        transition-all duration-300 ease-in-out
        ${expanded ? "w-52" : "w-16"}
      `}
    >
      <nav className="flex flex-col items-start pt-6 px-2 space-y-4">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={({ isActive }) =>
              `
                flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "hover:bg-gray-700"
                }
              `
            }
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {expanded && (
              <span className="whitespace-nowrap text-sm">{item.name}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
