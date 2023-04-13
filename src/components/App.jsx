import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import HeaderPage from './Header/HeaderPage';
import MovieItem from './MovieItem/MovieItem';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

// import TrendingMovies from './TrendingMovies/TrendingMovies';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <HeaderPage />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieid" element={<MovieItem />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
