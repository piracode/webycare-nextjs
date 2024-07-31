import axios from 'axios'

export const fetchProjects = async () => {
  const response = await axios.get(
    'https://martha.codes/webycare/wp-json/wp/v2/project'
  )
  return response.data
}
