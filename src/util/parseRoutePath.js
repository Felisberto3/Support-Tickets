export function parseRoutePath(path) {
  const routeParamentersRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParamentersRegex, "(?<$1>[a-z0-9-_]+)")

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex
}