import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Patients from "../pages/Patients";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import { GrOverview } from "react-icons/gr";
import RegisterPatient from "../pages/RegisterPatient";
import Map from "../pages/Map";
import Department from "../pages/Department";
import History from "../pages/History";
import Settings from "../pages/Settings";
import OverView from "../pages/OverView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<OverView />} />
          <Route path="patients" element={<Patients />} />
          <Route path="register-patient" element={<RegisterPatient />} />
          <Route path="map" element={<Map />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="departments" element={<Department />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
