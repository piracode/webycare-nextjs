'use client'

import React, { useContext } from 'react'
import { DataContext } from './contexts/DataContext'
import SwipeCarousel from '@/components/SwipeCarousel'
import styles from '../styles/homePage/ourWorkSection.module.scss'

const OurWorkSection = () => {
  const { data } = useContext(DataContext)

  if (!data?.ourWork) return null

  const { ourWorkTitle, ourWorkDescription } = data.ourWork

  return (
    <section className={styles['our-work-section']}>
      <h2>{ourWorkTitle}</h2>
      <p>{ourWorkDescription}</p>
      <SwipeCarousel className={styles.carousel} />
    </section>
  )
}

export default OurWorkSection
