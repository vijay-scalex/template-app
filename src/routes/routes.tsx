import PrivateLayout from "../layouts/private.layout";
import PublicLayout from "../layouts/public.layout";
import CounterPage from "../pages/counter.page";
import DashboardPage from "../pages/dashboard.page";
import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";
import SignUpPage from "../pages/signUp.page";
import { renderRoutes } from "./generate-routes";
import type { TLayoutRoute } from "./types";

export const routes: TLayoutRoute[] = [
  {
    layout: PublicLayout,
    isPublic: true,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/",
      },
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
      },
      {
        name: "sign up",
        title: "Sign up page",
        component: SignUpPage,
        path: "/sign-up",
      },
    ],
  },
  {
    layout: PrivateLayout,
    routes: [
      {
        name: "dashboard",
        title: "Dashboard",
        component: DashboardPage,
        path: "/",
      },
      {
        name: "dashboard",
        title: "Dashboard",
        component: DashboardPage,
        path: "/dashboard",
      },
      {
        name: "profile",
        title: "Profile",
        component: ProfilePage,
        path: "/profile",
      },
      {
        name: "counter",
        title: "Counter",
        component: CounterPage,
        path: "/counter",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
