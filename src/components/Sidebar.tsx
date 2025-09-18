import { Home, User, Folder, Mail } from "lucide-react";

type SidebarProps = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

function Sidebar({ expanded, setExpanded }: SidebarProps) {
  const menuItems = [
    { name: "Home", anchor: "/home#home", icon: <Home size={18} /> },
    { name: "About", anchor: "/home#about", icon: <User size={18} /> },
    { name: "Projects", anchor: "/home#projects", icon: <Folder size={18} /> },
    { name: "Contact", anchor: "/home#contact", icon: <Mail size={18} /> }, // Contact 섹션은 추후 추가 시 앵커만 맞추면 됨
  ];

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        h-screen fixed top-0 left-0 z-50
        bg-[#0c0c0c] text-[#e6e6e6] border-r border-white/10
        transition-all duration-300 ease-in-out
        ${expanded ? "w-52" : "w-16"}
      `}
    >
      <div
        className={`
          h-10 bg-[#2c001e] flex items-center px-2
          ${expanded ? "justify-between" : "justify-center"}
        `}
      >
        <div className={`flex items-center ${expanded ? "gap-2" : "gap-1.5"}`}>
          <span className="inline-block h-2 w-2 rounded-full bg-[#E95420]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#F0A513]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#7FB800]" />
          {expanded && (
            <span className="ml-2 text-xs text-white/70 font-mono">
              /usr/bin/nav
            </span>
          )}
        </div>
        {expanded && <div className="w-4" />}
      </div>

      <nav className="flex flex-col items-start pt-4 px-2 space-y-2">
        {menuItems.map((item) => (
          <a
            href={item.anchor}
            key={item.name}
            className={`
              flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-300
              hover:bg-white/10
            `}
          >
            <div className="min-w-[18px]">{item.icon}</div>
            {expanded && (
              <span className="whitespace-nowrap text-xs font-mono">
                {item.name}
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
