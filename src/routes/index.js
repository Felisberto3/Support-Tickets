import { ticketsRoutes } from "../routes/tickets.js";
import { parseRoutePath } from "../util/parseRoutePath.js";

export const routes = [ ...ticketsRoutes].map(route => ({
  ...route,
  path: parseRoutePath(route.path)
}))