import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/requests';
import noImage from '../../images/notFound.png';
import styles from './Homepage.module.css';

const {
  trendingTitle,
  trendingList,
  trendingListItem,
  trendingListTitle,
  trendingListimg,
} = styles;

const Homepage = props => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setTrendingMovies(data.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <section>
      <>
        <h1 className={trendingTitle}>Trending today</h1>

        <ul className={trendingList}>
          {trendingMovies.map(({ id, poster_path, title }) => (
            <li key={id} className={trendingListItem}>
              <Link to={`/movies/movie/${id}`} state={{ from: location }}>
                <img
                  className={trendingListimg}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : noImage
                  }
                  alt={title}
                />
                <p className={trendingListTitle}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    </section>
  );
};

export default Homepage;
