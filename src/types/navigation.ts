export enum Route {
  HOME = '/',
  ABOUT = '/about',
  FACILITIES = '/facilities',
  EXPERIENCES = '/experiences',
  SURROUNDINGS = '/surroundings',
  CONTACT = '/contact',
}

export interface NavLink {
  href: Route
  label: string
}
