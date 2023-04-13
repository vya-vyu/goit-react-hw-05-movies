import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { getPopularMovies } from 'servises/MoviesApi';

const Home = () => {
  const [Movies, setMovies] = useState([]);
  function fetchMovies() {
    getPopularMovies().then(setMovies);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={Movies} />
    </>
  );
};
export default Home;
