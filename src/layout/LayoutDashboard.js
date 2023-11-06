import Overlay from "components/common/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
const LayoutDashboard     = () => (
  <div className="p-10 bg-lite min-h-screen">
    <Overlay></Overlay>
    <DashboardTopbar />
    <div className="flex gap-x-10 items-start">
      <DashboardSidebar />
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  </div>
);
LayoutDashboard.propTypes = {
  children: PropTypes.any,
};
export default LayoutDashboard;
