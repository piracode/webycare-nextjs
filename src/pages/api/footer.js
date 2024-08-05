import axios from 'axios'

export async function fetchFooterNavigation() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=global-footer`
    )
    if (response.data && response.data.length > 0) {
      return response.data[0].acf //Returns the ACF fields of "global-footer"
    }
    return null
  } catch (error) {
    console.error('Error fetching footer navigation data:', error)
    return null
  }
}
