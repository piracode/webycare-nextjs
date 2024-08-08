'use client'

import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import styles from '../../styles/homePage/whoAreWeSection.module.scss'
import Image from 'next/image'

const WhoAreWeSection = () => {
  const { data } = useContext(DataContext)

  console.log('Data in WhoAreWeSection:', data)

  if (!data?.whoAreWeData) return null

  const { title, text, image, learnMoreLinkTitle } = data.whoAreWeData

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt='Who are we'
          //get the alt from WordPress?
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <p>{text}</p>
      <a href='/about'>{learnMoreLinkTitle}</a>
    </section>
  )
}

export default WhoAreWeSection
