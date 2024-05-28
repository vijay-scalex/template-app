import { Link, Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-vh-100 bg-light bg-gradient">
      <header className="d-flex align-items-center justify-content-between  bg-info  p-2">
        <h2 className="h2">Template</h2>
        <div className="float-right d-flex justify-content-between">
          <Link className="btn active" to="/login">
            Login
          </Link>
          <Link className="btn " to="/sign-up">
            Sign up
          </Link>
        </div>
      </header>
      <div className="layout d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
