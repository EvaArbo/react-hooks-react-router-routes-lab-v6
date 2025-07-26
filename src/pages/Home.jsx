import NavBar from "../components/NavBar";

import moviesData from '../../db.json';
import { Link } from 'react-router-dom';

function Home() {
  const movies = moviesData.movies;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies && movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <Link to={`/movie/${movie.id}`}>View Info</Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default Home;


