'use client'

import React from 'react'
import Link from 'next/link'
import useFetch from '../utilities/useFetch'
import { fetchHeaderNavigation } from '../utilities/api'
import withDataFetch from '../components/withDataFetch'
import ThemeToggleButton from './ToggleThemeButton'

const Navigation = ({ navigationData }) => {
  const { navigation_logo_svg, navigation_links } = navigationData?.acf || {}

  return (
    <nav>
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

console.log(typeof process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY)

/** Uses the withDataFetch HOC to fetch navigation data and pass it to the Navigation component.*/

const NavigationWithDataFetch = () => {
  const { data, loading, error } = useFetch(fetchHeaderNavigation)
  const WrappedNavigation = withDataFetch(Navigation)
  return (
    <WrappedNavigation navigationData={data} loading={loading} error={error} />
  )
}

export default NavigationWithDataFetch
