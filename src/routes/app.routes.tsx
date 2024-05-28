import { BrowserRouter } from "react-router-dom";

import { Fragment } from "react/jsx-runtime";

import useAuthStore from "../features/auth/auth.store";
import { Routes } from "./routes";

const AppRoutes = () => {
  const { isAuthorized } = useAuthStore();

  return (
    <Fragment>
      <BrowserRouter>
        <Routes isAuthorized={isAuthorized} />
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRoutes;
