import axios from 'axios';

const API_KEY = '06a035835c96c01cd65869aee095376e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () =>
  await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
