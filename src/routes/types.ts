import { FC, JSX } from "react";

export type TRoute = {
  name: string;
  title: string;
  component: () => JSX.Element;
  path: string;
  routes?: TRoute[];
  isPublic?: boolean;
};

export type TLayoutRoute = {
  layout: FC;
  routes: TRoute[];
  isPublic?: boolean;
};
