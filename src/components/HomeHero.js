'use client'

import React, { useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataContext } from './contexts/DataContext'
import styles from '../styles/homePage/hero.module.scss'

const Hero = () => {
  const { data } = useContext(DataContext)

  // States to control the visibility of each part of the h1 title text
  const [showWelcome, setShowWelcome] = useState(false)
  const [showTo, setShowTo] = useState(false)
  const [showWebycare, setShowWebycare] = useState(false)

  useEffect(() => {
    // Show each part of the h1 title with a delay
    setTimeout(() => setShowWelcome(true), 500)
    setTimeout(() => setShowTo(true), 1000)
    setTimeout(() => setShowWebycare(true), 1500)
  }, [])

  if (!data || !data.heroData) return null // Check if data is available

  const { heroData } = data

  return (
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
            //Will probably remove the scale on the buttons in the future, tried ebverything to fix the bluriness of the text but not working.
            //Here is what I tried: https://stackoverflow.com/questions/14677490/blurry-text-after-using-css-transform-scale-in-chrome
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
