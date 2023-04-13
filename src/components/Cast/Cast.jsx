import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'servises/MoviesApi';
const Cast = () => {
  const { movieid } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getCastById(movieid).then(setCast);
  }, [movieid]);
  console.log(cast);
  return (
    <ul>
      {cast &&
        cast.map(el => (
          <li key={el.id}>
            <img
              src={`https://www.themoviedb.org/t/p/w200${el.profile_path}`}
              alt={el.name}
            />
            <h3>{el.name}</h3>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
