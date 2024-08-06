//modified code from this codepen https://codepen.io/shephero/pen/LYVrdjX

import React, { useRef, useEffect } from 'react'

const HamburgerMenu = ({ toggleMenu, menuOpen }) => {
  const startAnimationRef = useRef(null)
  const reverseAnimationRef = useRef(null)

  useEffect(() => {
    if (menuOpen) {
      startAnimationRef.current.beginElement()
    } else {
      reverseAnimationRef.current.beginElement()
    }
  }, [menuOpen])

  return (
    <svg
      className='hamburger-menu-svg'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 10 10'
      stroke='var(--theme-svg-fill)'
      strokeWidth='.6'
      fill='none'
      strokeLinecap='round'
      style={{ cursor: 'pointer' }}
      onClick={toggleMenu}
    >
      <path d='M2,3L5,3L8,3 M2,5L8,5 M2,7L5,7L8,7'>
        {/* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate */}
        <animate
          ref={startAnimationRef}
          dur='0.2s'
          attributeName='d'
          values='M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7'
          fill='freeze'
          begin='indefinite'
        />
        <animate
          ref={reverseAnimationRef}
          dur='0.2s'
          attributeName='d'
          values='M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7'
          fill='freeze'
          begin='indefinite'
        />
      </path>
    </svg>
  )
}

export default HamburgerMenu
