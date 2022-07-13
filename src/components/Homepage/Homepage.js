import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api/requests';
import styles from './Homepage.module.css';

const Homepage = props => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setTrendingMovies(data.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <section className={styles.section}>
      <>
        {/* <h1>Trending today</h1> */}

        <ul className={styles.trendingList}>
          {trendingMovies.map(({ id, poster_path, title }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </>
    </section>
  );
};

export default Homepage;
