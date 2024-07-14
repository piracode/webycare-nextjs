import React from 'react'
import styles from '../styles/swipeCarousel.module.scss'

const Dots = ({ imgIndex, setImgIndex, images }) => {
  return (
    <div className={styles.dotContainer}>
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`${styles.dot} ${imgIndex === idx ? styles.active : ''}`}
        />
      ))}
    </div>
  )
}

export default Dots
