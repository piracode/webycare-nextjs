import axios from 'axios'
import { fetchImageById } from './media'

// Fetch Hero Data
export const fetchHeroData = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=home-page`
    )
    if (response.data && response.data.length > 0) {
      const homePageData = response.data[0]

      // Fetch the image data
      const imageResponse = await fetchImageById(
        homePageData.acf.hero_background_image
      )
      const backgroundImage = imageResponse.source_url

      return {
        title: homePageData.acf.hero_title,
        subtitle: homePageData.acf.hero_subtitle,
        backgroundImage: backgroundImage,
        portfolioLinkTitle: homePageData.acf.hero_view_portfolio_link_title,
        contactLinkTitle: homePageData.acf.hero_contact_link_title,
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}
