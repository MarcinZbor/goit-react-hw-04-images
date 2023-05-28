import axios from 'axios';

async function getPicturesData(keyWord, page) {
  const API_KEY = '34773619-02e57e7e6abc6b8b39b294f44';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: keyWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: 12,
  });

  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
}


export default getPicturesData

