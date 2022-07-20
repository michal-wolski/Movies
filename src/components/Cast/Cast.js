import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/requests';
import { toast } from 'react-toastify';
import noImage from '../../images/notFound.png';
import styles from './Cast.module.css';

const { container, castList } = styles;

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(({ data }) => {
        if (data.cast.length === 0) {
          toast.info('Sorry, cast is not available');
        }
        setCast(data.cast);
      })
      .catch(error =>
        toast.error('Woops, something went wrong... Try again later.')
      );
  }, [movieId]);
  return (
    <div className={container}>
      {cast && (
        <ul className={castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : noImage
                }
                alt={name}
                width="100"
                height="150"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
