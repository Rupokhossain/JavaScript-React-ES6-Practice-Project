import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useLocation } from "react-router";

const Navber = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <nav className={`py-4 px-6 shadow-md sticky top-0 z-10 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
      <div className="max-w-md mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/" className={`font-bold ${location.pathname === "/" ? "text-indigo-600" : "text-gray-400"}`}>Dashboard</Link>
          <Link to="/stats" className={`font-bold ${location.pathname === "/stats" ? "text-indigo-600" : "text-gray-400"}`}>Stats</Link>
        </div>
        <button onClick={toggleTheme} className="p-2 bg-indigo-50 rounded-lg">{isDarkMode ? "☀️" : "🌙"}</button>
      </div>
    </nav>
  );
};
export default Navber;