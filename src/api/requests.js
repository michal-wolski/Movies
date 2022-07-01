import { movieApiClient } from './client';

export const reguestTrendingMovie = async () => {
  const data = await movieApiClient.get(
    `trending/movie/day?api_key=06a035835c96c01cd65869aee095376e`
  );
  return data;
};
