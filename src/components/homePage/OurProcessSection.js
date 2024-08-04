'use client'

import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import styles from '../../styles/homePage/ourProcessSection.module.scss'

const OurProcessSection = () => {
  const { data } = useContext(DataContext)

  if (!data?.ourProcess) return null

  const {
    process_section_title,
    process_intro_text,
    process_steps,
    process_closing_text,
    process_explore_text,
    process_portfolio_link,
  } = data.ourProcess

  return (
    <section className={styles['our-process-section']}>
      <h2>{process_section_title}</h2>
      <p>{process_intro_text}</p>
      <ul>
        {process_steps.map((step, index) => (
          <li key={index}>
            <span
              dangerouslySetInnerHTML={{ __html: step.step_icon }}
              className={styles['step-icon']}
            />
            <p>{step.step_description}</p>
          </li>
        ))}
      </ul>
      <p>{process_closing_text}</p>
      <p className={styles['see-more']}>{process_explore_text}</p>
      <a href='/portfolio' className={styles['portfolio-link']}>
        {process_portfolio_link}
      </a>
    </section>
  )
}

export default OurProcessSection
