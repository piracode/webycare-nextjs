'use client'

import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import styles from '../../styles/common/footer.module.scss'

const Footer = () => {
  const { data } = useContext(DataContext)

  // Check if data is available
  if (!data || !data.footerData) return <div>Loading...</div>

  const { footerData } = data
  const {
    heart_logo_footer,
    word_logo_footer,
    prefer_to_email_text,
    prefer_to_email_email,
    web_development_services,
    additional_services,
    company_links,
    social_media_links,
    footer_legal_links,
    copyright_text,
    stay_connected_description_text,
    stay_connected_placeholder,
    stay_connected_submit_button_text,
  } = footerData || {}

  console.log('Footer Data:', footerData)

  return (
    <>
      <section className={styles.preferEmail}>
        <p>{prefer_to_email_text}</p>
        <p>{prefer_to_email_email}</p>
      </section>
      <footer className={styles.footer}>
        <header className={styles.header}>
          <div
            className={styles.logoHeart}
            dangerouslySetInnerHTML={{ __html: heart_logo_footer }}
          ></div>
          <div
            className={styles.logoWord}
            dangerouslySetInnerHTML={{ __html: word_logo_footer }}
          ></div>
        </header>
        <section className={styles.linksSection}>
          <article className={styles.linksColumn}>
            <h4>Web Development Services</h4>
            <ul>
              {web_development_services?.map((service, index) => (
                <li key={index}>
                  <a
                    href={`/services/${service.service_name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    {service.service_name}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className={styles.linksColumn}>
            <h4>Additional Services</h4>
            <ul>
              {additional_services?.map((service, index) => (
                <li key={index}>
                  <a
                    href={`/services/${service.service_name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    {service.service_name}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className={styles.linksColumn}>
            <h4>Company</h4>
            <ul>
              {company_links?.map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.link_name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    {link.link_name}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          {/* For the future TODO:

Maybe use https://emailoctopus.com/*/}

          {/* <aside className={styles.newsletter}>
            <h4>Let’s Stay Connected</h4>
            <p>{stay_connected_description_text}</p>
            <form>
              <input
                type='email'
                placeholder={stay_connected_placeholder}
                className={styles.emailInput}
              />
              <button type='submit' className={styles.submitButton}>
                {stay_connected_submit_button_text}
              </button>
            </form>
          </aside> */}
        </section>
        <section className={styles.socialsSection}>
          <h4>Follow Us</h4>
          {/* Add social media links in the future here */}
        </section>
        <section className={styles.footerBottom}>
          <ul>
            {footer_legal_links?.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.link_name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.link_name}
                </a>
              </li>
            ))}
          </ul>
          <p>© 2024 - All rights reserved</p>
        </section>
      </footer>
    </>
  )
}

export default Footer
