'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchHeaderNavigation } from '../utilities/api'

export default function Navigation() {
  const [navigationData, setNavigationData] = useState(null)

  useEffect(() => {
    async function getData() {
      const data = await fetchHeaderNavigation()
      setNavigationData(data)
    }
    getData()
  }, [])

  if (!navigationData) return null

  const { navigation_logo_svg, navigation_links } = navigationData.acf

  return (
    <nav>
      <div
        className='logo'
        dangerouslySetInnerHTML={{ __html: navigation_logo_svg }}
      />
      <ul>
        {navigation_links.map((link, index) => (
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
