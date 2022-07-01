import React from 'react';
import { useEffect } from 'react';
import { reguestTrendingMovie } from 'api/requests';

const Movies = props => {
  useEffect(() => {
    const data = reguestTrendingMovie();
    console.log(data);
  });

  return <div></div>;
};

export default Movies;
