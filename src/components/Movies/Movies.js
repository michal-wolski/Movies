import React from 'react';
import { useState } from 'react';
import { getMovieByQuery } from '../../api/requests';

const Movies = props => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleSubmitSearchMovie = query => {
    // evt.preventDefault();
    getMovieByQuery(query);
    console.log(query);
  };

  return (
    <form>
      <input id="searchInput" onChange={onChange}></input>
      <button onSubmit={handleSubmitSearchMovie}>Search</button>
    </form>
  );
};

export default Movies;
