import axios from 'axios'

export const fetchImageById = async (id) => {
  const response = await axios.get(
    `https://martha.codes/webycare/wp-json/wp/v2/media/${id}`
  )
  return response.data
}
