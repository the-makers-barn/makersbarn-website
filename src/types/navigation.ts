export enum Route {
  HOME = '/',
  ABOUT = '/about',
  FACILITIES = '/facilities',
  EXPERIENCES = '/experiences',
  SHANTI_DEVA_RETREAT = '/experiences/shanti-deva-retreat',
  SURROUNDINGS = '/surroundings',
  CONTACT = '/contact',
  BOOK = '/book',
  HOST_A_RETREAT = '/host-a-retreat',
  COMPARISON = '/slow-living-vs-commercial-hospitality',
  YOGA_TEACHERS = '/yoga-teachers',
  MEDITATION_RETREATS = '/meditation-retreats',
  WRITING_RETREATS = '/writing-retreats',
  TEAM_OFFSITES = '/team-offsites',
  BREATHWORK_SOUND_HEALING = '/breathwork-sound-healing',
  COACHING_INTENSIVES = '/coaching-intensives',
  SOMATIC_THERAPY_RETREATS = '/somatic-therapy-retreats',
  WELLNESS_DETOX_RETREATS = '/wellness-detox-retreats',
  CIRCLE_RETREATS = '/circle-retreats',
  PHOTOGRAPHY_WORKSHOPS = '/photography-workshops',
}

export interface NavLink {
  href: Route
  label: string
}
