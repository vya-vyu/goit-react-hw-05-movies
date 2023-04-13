import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieByID } from 'servises/MoviesApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieByID(movieid).then(setMovie);
  }, [movieid]);
  return (
    <div>
      {movie && <MovieInfo movie={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={location.state ?? '/'}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state ?? '/'}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieItem;
