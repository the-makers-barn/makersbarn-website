import Hero from '../components/Hero'
import HeroDetails from '../components/HeroDetails'
import AccommodationStats from '../components/AccommodationStats'
import ImpressionDynamicWall from '../components/ImpressionDynamicWall'
import ImpressionCarousel from '../components/ImpressionCarousel'
import ImpressionPolaroids from '../components/ImpressionPolaroids'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <HeroDetails />
      <AccommodationStats />
      {/* <ImpressionDynamicWall /> */}
      <ImpressionCarousel />
      <Testimonials />
      <ImpressionPolaroids />
    </>
  )
}

export default Home
