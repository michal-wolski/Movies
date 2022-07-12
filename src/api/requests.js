import axios from 'axios';

const API_KEY = '06a035835c96c01cd65869aee095376e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () =>
  await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

export const getMovieByQuery = query =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);

export const getMovieById = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

export const getMovieCast = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);

export const getMovieReviews = movieId =>
  axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
