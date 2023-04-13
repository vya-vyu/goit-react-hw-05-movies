import { useLocation, useNavigate } from 'react-router-dom';
const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const nav = useNavigate();
  // const backLink = location.state?.page ?? '/';
  console.log(location.state?.page);
  const { title, poster_path, release_date, overview, genres, vote_average } =
    movie;
  return (
    <>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        back
        {/* <Link to={backLink}>Back</Link> */}
      </button>
      <div>
        <img src={`https://www.themoviedb.org/t/p/w300${poster_path}`} alt="" />
        <h1>
          <span>{title}</span>
          <span>({release_date.slice(0, 4)})</span>
        </h1>
        <p>User Score : {Math.round(vote_average * 10)}%</p>
        <h2>Owerview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MovieInfo;
