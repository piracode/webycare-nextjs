'use client'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import { useTheme } from './ThemeContext'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    // <button onClick={toggleTheme}>
    //   Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    // </button>
    <button onClick={toggleTheme} aria-label='Toggle Theme'>
      {theme === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </button>
  )
}

export default ThemeToggleButton
