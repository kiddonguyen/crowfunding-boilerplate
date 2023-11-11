import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const RequiredAuthPage = ({ allowPermissions }) => {
  const { user }        = useSelector((state) => state.auth);
  const userPermissions = user?.permissions || [];
  const location        = useLocation();
  let result;
  const hasPermission   = userPermissions.find((userPermission) =>
    allowPermissions?.includes(userPermission)
  );

  if (hasPermission) {
    result = <Outlet />;
  } else if (user) {
    result = (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
  } else {
    result = <Navigate to="/login" state={{ from: location }} replace />;
  }

  return result;
};

export default RequiredAuthPage;
