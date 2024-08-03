'use client'

import { createContext, useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { fetchHeaderNavigation } from '../../pages/api/navigation'
import { fetchHeroData, fetchWhoAreWeData } from '../../pages/api/homePage'
import { fetchProjects } from '../../pages/api/projects'
import { fetchServices } from '../../pages/api/services'
import { fetchImageById } from '../../pages/api/media'
import loadingStyles from '../../styles/withDataFetch.module.scss'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [headerData, heroData, projects, whoAreWeData, services] =
          await Promise.all([
            fetchHeaderNavigation(),
            fetchHeroData(),
            fetchProjects(),
            fetchWhoAreWeData(),
            fetchServices(),
          ])

        const images = await Promise.all(
          projects.map(async (project) => {
            const desktopImage = await fetchImageById(
              project?.acf?.project_desktop_image
            )
            const mobileImage = await fetchImageById(
              project?.acf?.project_mobile_image
            )
            return {
              desktop: desktopImage?.source_url,
              mobile: mobileImage?.source_url,
            }
          })
        )

        console.log('Fetched Data:', {
          // headerData,
          // heroData,
          // images,
          // whoAreWeData,
          services,
        })
        setData({ headerData, heroData, images, whoAreWeData, services })
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <Box className={loadingStyles.loadingBox}>
        <CircularProgress className={loadingStyles.customSpinner} />
      </Box>
    )
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}
