import axios from 'axios'

export async function fetchAboutPageData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=about`
    )
    if (response.data && response.data.length > 0) {
      return response.data[0].acf
    }
    return null
  } catch (error) {
    console.error('Error fetching footer about page data:', error)
    return null
  }
}
