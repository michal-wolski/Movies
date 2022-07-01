import axios from 'axios';

export const movieApiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
