'use client'

import { useEffect, useState } from 'react'
import { fetchHeroData } from '../utilities/api'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/hero.module.scss'

const Hero = () => {
  // State to store hero data fetched from the API
  const [heroData, setHeroData] = useState(null)

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
      {/* Animate title sliding in from the left */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {heroData.title}
      </motion.h1>

      {/* Animate description box sliding in from the right */}
      <motion.div
        className={styles.descriptionBox}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>{heroData.subtitle}</p>
        <nav className={styles.heroButtons}>
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
        </nav>
      </motion.div>
    </motion.section>
  )
}

export default Hero
