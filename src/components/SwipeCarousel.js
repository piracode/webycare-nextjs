// Followed & modified this tuto: https://www.youtube.com/watch?v=mn_fh7pRj7w
// The youtuber also offers the solution for plenty of components - very cool: https://www.hover.dev/components/carousels

'use client'

import React, { useContext, useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Images from './Images'
import Dots from './Dots'
import styles from '../styles/swipeCarousel.module.scss'
import { DataContext } from './contexts/DataContext'

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
  const { data } = useContext(DataContext)
  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)

  const { images } = data || {}

  useEffect(() => {
    if (!images || images.length === 0) return

    // Auto-change images every 10 seconds
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        // 'prev' refers to the current state value of 'imgIndex'
        setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [images, dragX])

  // Handle drag end to change image
  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1)
    }
  }

  if (!images || images.length === 0) {
    return <div>Loading...</div>
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
