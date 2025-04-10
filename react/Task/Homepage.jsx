import {
  Link
} from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gradient-to-br from-[#ecf0f1] to-[#e5e9f2] min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 drop-shadow">
        Home page
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/counter" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Counter
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/todo" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Todo List
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/toggle" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Toggle Text
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/char" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Character Counter
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/livesearch" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Live Search
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/apifetch" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            API Fetch
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/formvalidator" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Form Validator
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/Accordian" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Accordian
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/ThemeToggle" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Theme Toggle
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/timer" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Timer
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/dynamic/1" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Dynamic Route
          </Link>
        </li>
        <li className="bg-white/90 rounded-2xl shadow-md p-4">
          <Link to="/adminpannel" className="block w-full h-full text-gray-800 hover:text-gray-900 transition">
            Admin Pannel
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;


