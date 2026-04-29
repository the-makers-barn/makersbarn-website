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
  TOOLS = '/tools',
  RETREAT_PROFITABILITY_CALCULATOR = '/tools/retreat-profitability-calculator',
  YOGA_RETREAT_PRICING_CALCULATOR = '/tools/yoga-retreat-pricing-calculator',
  WELLNESS_RETREAT_PRICING_CALCULATOR = '/tools/wellness-retreat-pricing-calculator',
  MEDITATION_RETREAT_PRICING_CALCULATOR = '/tools/meditation-retreat-pricing-calculator',
  COACHING_RETREAT_PRICING_CALCULATOR = '/tools/coaching-retreat-pricing-calculator',
  THREE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/3-month-retreat-launch-calendar',
  SIX_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/6-month-retreat-launch-calendar',
  NINE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/9-month-retreat-launch-calendar',
  TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/12-month-retreat-launch-calendar',
}

export interface NavLink {
  href: Route
  label: string
}
