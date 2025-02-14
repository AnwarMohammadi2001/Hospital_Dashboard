import { Link, useLocation } from "react-router-dom";
import {
  FaUserMd,
  FaChartPie,
  FaUserPlus,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaHistory,
  FaCog,
} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation(); // Get current route

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 relative h-screen bg-white shadow-lg  text-gray-600 px-7 font-semibold p-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2">
        <FaHospital className="text-3xl text-violet-600" />
        <h2 className="text-xl font-bold text-slate-900">HP Darman</h2>
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-10 space-y-2 font-semibold">
        <li
          className={`${
            isActive("/register-patient")
              ? "bg-violet-700 text-white"
              : "bg-violet-700 text-white"
          } rounded`}
        >
          <Link to="/register-patient" className="flex items-center justify-between gap-3 p-2">
             Register Patient
             <span><BiPlus /></span>
          </Link>
        </li>
        <div className="mt-5 space-y-1.5">
          <li
            className={`${
              isActive("/")
                ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/" className="flex items-center gap-3 p-2">
              <FaChartPie /> OverView
            </Link>
          </li>

          <li
            className={`${
              isActive("/patients")
                ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/patients" className="flex items-center gap-3 p-2">
              <FaUsers /> Patients
            </Link>
          </li>

          <li
            className={`${
              isActive("/doctors")
             ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/doctors" className="flex items-center gap-3 p-2">
              <FaUserMd /> Doctors
            </Link>
          </li>
          <li
            className={`${
              isActive("/departments")
      ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/departments" className="flex items-center gap-3 p-2">
              <FaBuilding /> Department
            </Link>
          </li>
          <li
            className={`${
              isActive("/appointments")
                ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/appointments" className="flex items-center gap-3 p-2">
              <FaCalendarAlt /> Appointments
            </Link>
          </li>

          <li
            className={`${
              isActive("/map")
             ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/map" className="flex items-center gap-3 p-2">
              <FaMapMarkerAlt /> Map
            </Link>
          </li>

       

          <li
            className={`${
              isActive("/history")
            ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/history" className="flex items-center gap-3 p-2">
              <FaHistory /> History
            </Link>
          </li>

          <li
            className={` mt-10 ${
              isActive("/settings")
                ? "text-violet-600 "
                : "hover:text-violet-600"
            } rounded`}
          >
            <Link to="/settings" className="flex items-center gap-3 p-2">
              <FaCog /> Settings
            </Link>
          </li>
        </div>
        <div className="absolute bg-violet-600 font-semibold text-white h-10 left-0 w-full bottom-1 flex items-center justify-center">
          <button className="flex items-center gap-2 px-4 py-2  rounded">
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </div>{" "}
      </ul>
    </div>
  );
};

export default Sidebar;
