
import NavBar from "../components/NavBar";
import moviesData from '../../db.json';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const movie = moviesData.movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Movie Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;


