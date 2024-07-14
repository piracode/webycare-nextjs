// Followed & modified this tuto: https://www.youtube.com/watch?v=mn_fh7pRj7w
// The youtuber also offers the solution for plenty of components - very cool: https://www.hover.dev/components/carousels

'use client'

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Images from './Images'
import Dots from './Dots'
import styles from '../styles/swipeCarousel.module.scss'
import { fetchProjects, fetchImageById } from '../utilities/api'

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const [images, setImages] = useState([])
  const dragX = useMotionValue(0)

  useEffect(() => {
    // Load images from API
    const loadImages = async () => {
      const projects = await fetchProjects()
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
      setImages(images)
    }

    loadImages()

    // Auto-change images every 10 seconds
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        // 'prev' refers to the current state value of 'imgIndex'
        setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [images.length])

  // Handle drag end to change image
  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1)
    }
  }

  return (
    <div className={styles.swipeCarousel}>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        className={styles.carouselContainer}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <Images
          imgIndex={imgIndex}
          images={images}
          springOptions={SPRING_OPTIONS}
        />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images} />
    </div>
  )
}

export default SwipeCarousel
