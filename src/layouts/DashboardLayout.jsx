import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        {/* Outlet (Main Content) */}
        <div className="flex-1 p-4 bg-gray-200 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
