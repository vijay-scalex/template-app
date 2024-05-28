import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthorized,
  isPublic,
}: {
  isAuthorized: boolean;
  isPublic?: boolean;
}) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
