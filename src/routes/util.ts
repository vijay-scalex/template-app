import { routes } from "./routes";

export function getTitleFromPath(path: string) {
  // Iterate over each group of routes
  for (const group of routes) {
    // Check each route in the current group
    for (const route of group.routes) {
      if (route.path === path) {
        return route.title;
      }
    }
  }
  // Default title if no match found
  return "Page Not Found";
}
