
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
const navitems = [
    { name: 'Home', href: '/' },
    {name:'create', href: '/create'},
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Dashboard', href: '/dashboard' },
]

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <div>
       <Link to={"/"} className="text-2xl font-bold text-white hover:text-gray-300">
       LOGO
       </Link>
        </div>
    <div>
    {
        navitems.map((item) => (
            <NavLink 
                key={item.name} 
                to={item.href} 
                className={({ isActive }) =>
                    
                    isActive
                      ? "px-4 py-2 mx-2 text-gray-700 bg-gray-100 rounded-md "  
                      : "text-gray-100 px-2 py-2 mx-2 "
                  }
            >
                {item.name}
            </NavLink>))
       }
    </div>
    </nav>
  )
}

export default Navbar