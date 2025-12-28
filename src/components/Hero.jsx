import { motion } from 'framer-motion'
import './Hero.css'
import heroImage from '../assets/images/field-walking-women.jpg'

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Retreat guests walking through the fields around The Makers Barn"
        className="hero-bg-image"
        loading="lazy"
      />

      <div className="hero-content">
        <motion.h1
          className="hero-heading-top"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Welcome to <motion.span
            className="hero-heading-emphasis"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.1, 
              ease: [0.25, 0.1, 0.25, 1],
              scale: { type: "spring", stiffness: 100, damping: 15 }
            }}
          >
            the Makers Barn
          </motion.span>
        </motion.h1>
        <motion.h2
          className="hero-heading-bottom"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Your retreat deserves more than<br />
          just a venue.
        </motion.h2>
      </div>
    </section>
  )
}

export default Hero
