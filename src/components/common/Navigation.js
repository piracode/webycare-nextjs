'use client'

import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { DataContext } from '../contexts/DataContext'
import ThemeToggleButton from './ToggleThemeButton'

const Navigation = () => {
  const { data } = useContext(DataContext)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Update the theme based on body class
    const updateTheme = () => {
      if (document.body.classList.contains('dark')) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    // Initial check
    updateTheme()

    // Listen for changes to the body's class list

    //https://stackoverflow.com/questions/3219758/detect-changes-in-the-dom
    //https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Cleanup observer on unmount
    return () => observer.disconnect()
  }, [])

  // Check if data is available
  if (!data || !data.headerData) return <div>Loading...</div>

  const { headerData } = data
  const {
    light_mode_navigation_logo_svg,
    dark_mode_navigation_logo_svg,
    navigation_links,
  } = headerData?.acf || {}

  return (
    <nav className='header-nav'>
      <div
        className='logo'
        dangerouslySetInnerHTML={{
          __html:
            theme === 'dark'
              ? dark_mode_navigation_logo_svg
              : light_mode_navigation_logo_svg,
        }}
      ></div>
      <div>
        <ThemeToggleButton />
      </div>
      <ul>
        {navigation_links?.map((link, index) => (
          <li key={index}>
            <Link
              href={`/${link.link_text.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.link_text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
