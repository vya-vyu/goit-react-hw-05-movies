import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'servises/MoviesApi';

const Reviews = () => {
  const { movieid } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getReviewsById(movieid).then(setReviews);
  }, [movieid]);

  return (
    <>
      <ul>
        {reviews && !reviews.length && (
          <p>We don`t have any reviews to this movie</p>
        )}
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Reviews;
// {
//   /* <p>We don't have any revews for this movie</p> */
// }s
