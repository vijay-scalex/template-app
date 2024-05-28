import flattenDeep from "lodash/flattenDeep";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import ProtectedRoute from "./protected.route";
import type { TLayoutRoute, TRoute } from "./types";

const generateFlattenRoutes = (routes: TRoute[] | undefined): TRoute[] => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes: TLayoutRoute[]) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const layouts = mainRoutes.map(
      ({ layout: Layout, routes, isPublic }: TLayoutRoute, index) => {
        const subRoutes = generateFlattenRoutes(routes);

        return (
          <Route key={index} element={<Layout />}>
            <Route
              element={
                <ProtectedRoute
                  isPublic={isPublic}
                  isAuthorized={isAuthorized}
                />
              }
            >
              {subRoutes.map(({ component: Component, path, name }: TRoute) => {
                return (
                  Component &&
                  path && (
                    <Route key={name} element={<Component />} path={path} />
                  )
                );
              })}
            </Route>
          </Route>
        );
      }
    );
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
