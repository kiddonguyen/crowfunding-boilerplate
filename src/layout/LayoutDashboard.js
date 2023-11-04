import DashboardSidebar from 'modules/dashboard/DashboardSidebar';
import DashboardTopbar from 'modules/dashboard/DashboardTopbar';
import PropTypes from 'prop-types';
const LayoutDashboard     = ({ children }) => (
  <div className="p-10 bg-lite min-h-screen">
    <DashboardTopbar />
    <div className="flex gap-x-10 items-start">
      <DashboardSidebar />
      <div className="flex-1">{children}</div>
    </div>
  </div>
);
LayoutDashboard.propTypes = {
  children: PropTypes.any,
};
export default LayoutDashboard;
