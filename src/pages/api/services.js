import axios from 'axios'

export async function fetchServices() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/service`
    )
    if (response.data && response.data.length > 0) {
      return response.data.map((service) => ({
        id: service.id,
        homeTitle: service.acf.homepage_service_title,
        logo: service.acf.service_logo,
      }))
    }
    return []
  } catch (error) {
    console.error('Error fetching services data:', error)
    throw error
  }
}
