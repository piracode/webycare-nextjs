import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const withDataFetch = (Component) => {
  return ({ loading, error, ...props }) => {
    if (loading) {
      return (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
        >
          <CircularProgress />
        </Box>
      )
    }

    if (error) {
      return <div>Error fetching data</div>
    }

    return <Component {...props} />
  }
}

export default withDataFetch
