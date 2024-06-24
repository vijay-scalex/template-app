import { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../features/auth/auth.store";
import { getTitleFromPath } from "../../routes/util";

const Header = () => {
  const location = useLocation();

  const [title, setTitle] = useState<string>("");
  console.log("title", title);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    setTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <header className="d-flex align-items-center justify-content-between  bg-secondary  p-2">
      <h2 className="h2 text-white">Template: {title}</h2>
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
