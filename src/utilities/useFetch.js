import { useState, useEffect } from 'react'

const useFetch = (fetchData) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [fetchData])

  return { data, loading, error }
}

export default useFetch
