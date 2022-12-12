import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieById } from 'api/requests';
import { BackLink } from 'utils/BackLink';
import styles from './MovieDetailsPage.module.css';

const { container, wrapper, score, overviewText, genresList, informationList } =
  styles;

const MoviesDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);

  useEffect(() => {
    if (!movieId) return;
    getMovieById(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error));
  }, [movieId]);
  const { poster_path, original_title, title, vote_average, overview, genres } =
    movie;
  return (
    <>
      <div className={container}>
        <BackLink to={backLinkHref}>Back to list</BackLink>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
        <div className={wrapper}>
          <div>
            <h1>{original_title}</h1>
            <p className={score}>User Score: {vote_average} %</p>
            <h2>Overview</h2>
            <p className={overviewText}>{overview}</p>
            {genres && (
              <>
                <h3>Genres</h3>
                <ul className={genresList}>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </>
            )}
            <h3>Additional information</h3>
            <ul className={informationList}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              {/* <li>
                <Link to="reviews">Reviews</Link>
              </li> */}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MoviesDetailPage;
