import { Outlet } from "react-router-dom";
import Header from "../components/privateLayout/header";

const PrivateLayout = () => {
  return (
    <div className="min-vh-100 bg-light bg-gradient">
      <Header />

      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
