'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import { DataContext } from '../contexts/DataContext'
import ThemeToggleButton from './ToggleThemeButton'

const Navigation = () => {
  const { data } = useContext(DataContext)

  // Check if data is available
  if (!data || !data.headerData) return <div>Loading...</div>

  const { headerData } = data
  const { navigation_logo_svg, navigation_links } = headerData?.acf || {}

  return (
    <nav className='header-nav'>
      <div
        className='logo'
        dangerouslySetInnerHTML={{ __html: navigation_logo_svg }}
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
