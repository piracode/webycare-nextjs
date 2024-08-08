'use client'

import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import styles from '../../styles/aboutPage/hero.module.scss'
import Image from 'next/image'

const AboutHero = () => {
  const { data } = useContext(DataContext)

  if (!data?.aboutData) return null

  const {
    hero_title,
    hero_text,
    hero_image,
    hero_contact_us_link,
    hero_view_portfolio_link,
  } = data.aboutData

  return (
    <section className={styles.heroSection}>
      <h1>{hero_title}</h1>
      <p dangerouslySetInnerHTML={{ __html: hero_text }} />
      <div className={styles.imageWrapper}>
        <Image
          src={hero_image.url}
          alt={hero_image.alt}
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <a
        className={`${styles.button} ${styles.contactButton}`}
        href={hero_contact_us_link}
      >
        Contact Us
      </a>
      <a
        className={`${styles.button} ${styles.portfolioButton}`}
        href={hero_view_portfolio_link}
      >
        View Portfolio
      </a>
    </section>
  )
}

export default AboutHero
