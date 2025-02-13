import { Link } from "react-router-dom";
import { FaUserMd, FaUsers, FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between ">
        <span><FaHospital /></span>
        <h2 className="text-xl font-bold mb-6">Hospital Dashboard</h2>

      </div>

      <ul>
        <li className="mb-4">
          <Link
            to="/"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/patients"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <FaUsers /> Patients
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/doctors"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <FaUserMd /> Doctors
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/appointments"
            className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
          >
            <FaCalendarAlt /> Appointments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
