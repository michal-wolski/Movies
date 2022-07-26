import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getMovieByQuery } from '../../api/requests';
import noImage from '../../images/notFound.png';
import styles from './Movies.module.css';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const { moviesList, moviesListItem, form, container, formInput } = styles;

const Movies = props => {
  const styles = {
    width: 300,
    marginBottom: 10,
  };
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query)
      .then(({ data }) => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div className={container}>
      <form className={form}>
        <Input
          type="text"
          style={styles}
          onChange={setQuery}
          size="lg"
          placeholder="Movie title"
        />
      </form>

      <section>
        <>
          <ul className={moviesList}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id} className={moviesListItem}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
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
