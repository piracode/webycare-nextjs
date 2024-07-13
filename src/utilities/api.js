import axios from 'axios'

export async function fetchHeaderNavigation() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=global-navigation`
    )
    if (response.data && response.data.length > 0) {
      return response.data[0] //Returns "global-navigation" unique slug
    }
    return null
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return null
  }
}

export const fetchProjects = async () => {
  const response = await axios.get(
    'https://martha.codes/webycare/wp-json/wp/v2/project'
  )
  return response.data
}

export const fetchImageById = async (id) => {
  const response = await axios.get(
    `https://martha.codes/webycare/wp-json/wp/v2/media/${id}`
  )
  return response.data
}
