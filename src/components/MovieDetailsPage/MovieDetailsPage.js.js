import { useState, useEffect } from 'react';
import { getMovieById } from 'api/requests';
import styles from './MovieDetailsPage.module.css';

const { container } = styles;

const MoviesDetailPage = () => {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState(13);

  useEffect(() => {
    if (!movieId) return;
    getMovieById(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error));
    console.log(movie);
  }, [movieId]);
  const { poster_path, original_title, title, vote_average, overview, genres } =
    movie;
  return (
    <div className={container}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <h1>{original_title}</h1>
        <p>User Score: {vote_average * 10} %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        {genres && (
          <>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesDetailPage;
