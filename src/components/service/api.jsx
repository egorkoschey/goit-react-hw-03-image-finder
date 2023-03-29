import axios from 'axios';

const API_KEY = '34850743-d06adfbe925838f55c2f02356';
let Api = `https://pixabay.com/api/`;

export const fetchImg = async (query, page = 1) => {
  const response = await axios.get(
    `${Api}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};