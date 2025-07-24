import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md p-4 sticky top-0 bg-white dark:bg-[#0f172a] z-50">
      <div className="max-w-[1257px] mx-auto flex justify-between items-center relative">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          BAHROM
        </Link>

        <div className="flex gap-4 items-center">
          <div
            className="md:hidden cursor-pointer text-gray-900 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>
        </div>

        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-400 transition text-gray-900 dark:text-white"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {open && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0f172a] shadow-md py-6 z-40 flex flex-col items-center justify-center gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold text-lg"
                      : "hover:text-blue-400 transition text-gray-900 dark:text-white text-lg"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
