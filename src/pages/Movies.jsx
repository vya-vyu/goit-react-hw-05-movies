import { useEffect, useState } from 'react';
import { getSearchByName } from 'servises/MoviesApi';

import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query');
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') return;
    getSearchByName(query).then(setMovies);
    setSearchParams({ query });
  };
  useEffect(() => {
    getSearchByName(filter).then(setMovies);
  }, [filter]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          value={query}
          onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
        ></input>
        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
export default Movies;
