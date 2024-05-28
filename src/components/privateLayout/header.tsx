import { memo } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../features/auth/auth.store";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="d-flex align-items-center justify-content-between  bg-secondary  p-2">
      <h2 className="h2 text-white">Template</h2>
      <div className="float-right d-flex justify-content-between">
        <Link className="btn active text-white" to="/counter">
          Counter
        </Link>
        <Link className="btn text-white" to="/dashboard">
          Dashboard
        </Link>
        <Link to="#" className="btn text-white">
          <i className="bi bi-bell"></i>
        </Link>

        <Link className="btn text-white" to="/profile">
          <i className="bi bi-person"></i>
          Profile
        </Link>
        <Link to="#" className="btn text-white" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
