import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/swipeCarousel.module.scss'

const Images = ({ imgIndex, images, springOptions }) => {
  useEffect(() => {
    const allImages = document.querySelectorAll(`.${styles.carouselImage}`)
    const handleResize = () => {
      allImages.forEach((img) => {
        const desktopSrc = img.dataset.desktop
        const mobileSrc = img.dataset.mobile
        const currentSrc = img.src

        if (window.innerWidth <= 700) {
          if (currentSrc !== mobileSrc) {
            img.src = mobileSrc
          }
        } else {
          if (currentSrc !== desktopSrc) {
            img.src = desktopSrc
          }
        }
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [images])

  return (
    <>
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          className={styles.image}
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={springOptions}
        >
          <img
            src={image.desktop}
            data-desktop={image.desktop}
            data-mobile={image.mobile}
            alt={`Image ${idx}`}
            className={styles.carouselImage}
            draggable='false'
          />
        </motion.div>
      ))}
    </>
  )
}

export default Images
