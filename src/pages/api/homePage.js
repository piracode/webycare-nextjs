import axios from 'axios';
import { fetchImageById } from './media';

// General Fetch Function for Home Page Data
const fetchHomePageData = async (fields) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/pages?slug=home-page`);
    if (response.data && response.data.length > 0) {
      const pageData = response.data[0];
      const result = {};

      for (const field of fields) {
        if (field.type === 'image') {
          const imageResponse = await fetchImageById(pageData.acf[field.acfKey]);
          result[field.name] = imageResponse.source_url;
        } else {
          result[field.name] = pageData.acf[field.acfKey];
        }
      }
      return result;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching home page data:`, error);
    throw error;
  }
};

// Fetch Hero Data
export const fetchHeroData = async () => {
  return await fetchHomePageData([
    { name: 'title', acfKey: 'hero_title' },
    { name: 'subtitle', acfKey: 'hero_subtitle' },
    { name: 'backgroundImage', acfKey: 'hero_background_image', type: 'image' },
    { name: 'portfolioLinkTitle', acfKey: 'hero_view_portfolio_link_title' },
    { name: 'contactLinkTitle', acfKey: 'hero_contact_link_title' },
  ]);
};

// Fetch Who Are We Data
export const fetchWhoAreWeData = async () => {
  return await fetchHomePageData([
    { name: 'title', acfKey: 'who_are_we_title' },
    { name: 'text', acfKey: 'who_are_we_text' },
    { name: 'image', acfKey: 'who_are_we_image', type: 'image' },
    { name: 'learnMoreLinkTitle', acfKey: 'learn_more_about_me_link_title' },
  ]);
};
