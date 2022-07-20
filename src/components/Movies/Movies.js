import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getMovieByQuery } from '../../api/requests';
import noImage from '../../images/notFound.png';
import styles from './Movies.module.css';

const { moviesList, moviesListItem, form, container } = styles;

const Movies = props => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  const onChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleSubmitSearchMovie = evt => {
    evt.preventDefault();
  };

  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query)
      .then(({ data }) => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div className={container}>
      <form className={form} onSubmit={handleSubmitSearchMovie}>
        <input
          type="text"
          id="searchInput"
          onChange={onChange}
          placeholder="Search movie by title"
        ></input>
        {/* <button type="submit">Search</button> */}
      </form>

      <section>
        <>
          <ul className={moviesList}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={moviesListItem}>
                <Link
                  to={{
                    pathname: `/movie/${id}`,
                    state: { from: { location } },
                  }}
                >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : noImage
                    }
                    alt={title}
                  />
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      </section>
    </div>
  );
};

export default Movies;
