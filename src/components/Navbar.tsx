import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `hover: text-blue-500 transition ${
      location.pathname === path ? "font-bold text-blue-600" : "text-white"
    }`;

  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow">
      <div className="text-xl font-semibold">Seongju</div>
      <div className="space-x-6">
        <Link to={"/"} className={linkStyle("/")}>
          Home
        </Link>
        <Link to={"/about"} className={linkStyle("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
