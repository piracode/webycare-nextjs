import axios from 'axios'

export async function fetchOurProcessData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=process-section`
    )
    if (response.data && response.data.length > 0) {
      return response.data[0].acf //to return only the ACF fields
    }
    return null
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return null
  }
}
