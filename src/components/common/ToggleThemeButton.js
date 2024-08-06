'use client'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import { useTheme } from '../contexts/ThemeContext'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className='theme-toggle-btn'
      onClick={toggleTheme}
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </button>
  )
}

export default ThemeToggleButton
