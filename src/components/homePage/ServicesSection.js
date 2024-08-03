'use client'

import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import styles from '../../styles/homePage/servicesSection.module.scss'

const HomePageServices = () => {
  const { data } = useContext(DataContext)

  //   console.log('Data in Services Hme Page:', data.services)

  if (!data?.services || !data?.servicesSectionData) return null

  return (
    <section className={styles['services-section']}>
      <h2>Our Services</h2>
      <ul>
        {data.services.map((service) => (
          <li key={service.id}>
            <div
              dangerouslySetInnerHTML={{ __html: service.logo }}
              className={styles['svg-icon']}
            />
            <h3>{service.homeTitle}</h3>
          </li>
        ))}
      </ul>
      <a href='/services' className={styles['learn-more-link']}>
        {data.servicesSectionData.learnMoreAboutServices}
      </a>
    </section>
  )
}

export default HomePageServices
