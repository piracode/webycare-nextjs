'use client'

import React from 'react'
import Link from 'next/link'
import useFetch from '../utilities/useFetch'
import { fetchHeaderNavigation } from '../utilities/api'
import withDataFetch from '../components/withDataFetch'

const Navigation = ({ navigationData }) => {
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

/** Uses the withDataFetch HOC to fetch navigation data and pass it to the Navigation component.*/

const NavigationWithDataFetch = () => {
  const { data, loading, error } = useFetch(fetchHeaderNavigation)
  const WrappedNavigation = withDataFetch(Navigation)
  return (
    <WrappedNavigation navigationData={data} loading={loading} error={error} />
  )
}

export default NavigationWithDataFetch