'use client'

import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { DataContext } from '../../contexts/DataContext'
import ThemeToggleButton from '../ToggleThemeButton'
import HamburgerMenu from './HamburgerMenu'

const Navigation = () => {
  const { data } = useContext(DataContext)
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  console.log('Navigation', data)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

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
      <div className='right-section'>
        <ThemeToggleButton />
        <div className='contact-link'>
          <Link href='/contact'>Contact</Link>
        </div>
        <HamburgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navigation_links?.map(
          (link, index) =>
            link.link_text.toLowerCase() !== 'contact' && (
              <li key={index}>
                <Link
                  href={`/${link.link_text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.link_text}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  )
}

export default Navigation
