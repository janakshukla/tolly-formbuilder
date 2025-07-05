import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    { name: "Home", href: "/" },
    { name: "create", href: "/create" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="flex justify-between items-center bg-gray-100 p-2 text-gray-700">
      <div>
        <Link to={"/"} className="text-xl font-bold  hover:text-orange-500">
          LOGO
        </Link>
      </div>
      <div>
        {navitems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `sm:px-4 py-1.5  rounded-md transition-colors duration-300 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "hover:bg-gray-200 hover:text-gray-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
