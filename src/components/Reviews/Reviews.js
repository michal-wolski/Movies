import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from 'api/requests';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(({ data }) => {
        if (data.results.length === 0) {
          toast.info('Sorry, reviews is not available');
        }
        console.log(reviews);
        setReviews(data.results);
      })
      .catch(error =>
        toast.error('Woops, something went wrong... Try again later.')
      );
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              {/* <ShowMore
                text={content}
                length={500}
                showMoreLabel=" Show more >>"
                showLessLabel=" Show less <<"
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              /> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
