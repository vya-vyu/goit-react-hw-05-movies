import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
