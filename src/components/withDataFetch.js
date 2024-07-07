import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import loadingStyles from '../styles/withDataFetch.module.scss'

/**
 * Higher Order Component (HOC) to handle data fetching states.
 * It wraps a component and adds loading and error handling.
 *
 * @param {React.Component} Component - The component to wrap with data fetching logic.
 * @returns {React.Component} - A new component with loading and error handling.
 */

const withDataFetch = (Component) => {
  // The returned component takes loading, error, and other props
  return ({ loading, error, ...props }) => {
    // If loading is true, display a loading spinner
    if (loading) {
      return (
        <Box className={loadingStyles.loadingBox}>
          <CircularProgress className={loadingStyles.customSpinner} />
        </Box>
      )
    }

    // If there's an error, display an error message
    if (error) {
      return <div>Error fetching data</div>
    }

    // Otherwise, render the wrapped component with the received props
    return <Component {...props} />
  }
}

export default withDataFetch
