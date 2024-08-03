import axios from 'axios'

export const fetchProjects = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/project`
  )
  return response.data
}
