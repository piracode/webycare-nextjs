'use client'

import { useEffect, useState } from 'react'
import { fetchHeroData } from '../utilities/api'
import { motion } from 'framer-motion'
import styles from '../styles/hero.module.scss'

const Hero = () => {
  // State to store hero data fetched from the API
  const [heroData, setHeroData] = useState(null)

  // States to control the visibility of each part of the h1 title text
  const [showWelcome, setShowWelcome] = useState(false)
  const [showTo, setShowTo] = useState(false)
  const [showWebycare, setShowWebycare] = useState(false)

  // useEffect to fetch hero data when the component mounts
  useEffect(() => {
    const getHeroData = async () => {
      // Fetch data from the API
      const data = await fetchHeroData()
      console.log(data)
      // Set the fetched data to the state
      setHeroData(data)
    }
    getHeroData()

    // Show each part of the h1 title with a delay
    setTimeout(() => setShowWelcome(true), 500)
    setTimeout(() => setShowTo(true), 1000)
    setTimeout(() => setShowWebycare(true), 1500)
  }, [])

  // Render loading message until hero data is fetched
  if (!heroData) return <div>Loading...</div>

  return (
    // Motion section with background image and opacity animation
    <motion.section
      className={`${styles.hero} ${styles.heroBackground}`}
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animate title appearing one at a time */}
      <div className={styles.heroTitleContainer}>
        <h1 className={styles.heroTitle}>
          <span
            className={`${styles.heroTitleSpan} ${styles.welcome}`}
            style={{ opacity: showWelcome ? 1 : 0 }}
          >
            Welcome
          </span>
          <span
            className={`${styles.heroTitleSpan} ${styles.to}`}
            style={{ opacity: showTo ? 1 : 0 }}
          >
            to
          </span>
          <span
            className={`${styles.heroTitleSpan} ${styles.webycare}`}
            style={{ opacity: showWebycare ? 1 : 0 }}
          >
            Webycare.
          </span>
        </h1>
      </div>

      {/* Animate description box sliding in from the right */}
      <motion.div
        className={styles.descriptionBox}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>{heroData.subtitle}</p>
        <div className={styles.heroButtons}>
          {/* Button animations with hover effect */}
          <motion.a
            href={heroData.contactLink}
            className={`${styles.button} ${styles.contactButton}`}
            whileHover={{ scale: 1.1 }}
          >
            {heroData.contactLinkTitle}
          </motion.a>
          <motion.a
            href={heroData.portfolioLink}
            className={`${styles.button} ${styles.portfolioButton}`}
            whileHover={{ scale: 1.1 }}
          >
            {heroData.portfolioLinkTitle}
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
