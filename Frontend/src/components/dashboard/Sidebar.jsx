import { BarChart2, Home, ListChecks } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", to: "/dashboard", icon: <BarChart2 size={18} /> },
    { name: "Quiz", to: "/quiz", icon: <ListChecks size={18} /> },
    { name: "Home", to: "/", icon: <Home size={18} /> },
    { name: "History", to: "/history", icon: <ListChecks size={18} /> },
  ];

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-800 text-white p-6 shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">
        Quizzy
      </h2>

      <nav className="flex flex-col space-y-3">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={clsx(
                "flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300",
                isActive
                  ? "bg-white text-purple-800 font-bold shadow-md"
                  : "hover:bg-indigo-700"
              )}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto text-center text-sm text-purple-200">
        <p className="opacity-80">© 2025 QuizGenie</p>
      </div>
    </div>
  );
};

export default Sidebar;
