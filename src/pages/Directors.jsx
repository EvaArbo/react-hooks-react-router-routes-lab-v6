import NavBar from "../components/NavBar";

import directorsData from '../../db.json';

function Directors() {
  const directors = directorsData.directors;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors && directors.length > 0 && (
          <div>
            {directors.map((director) => (
              <div key={director.id}>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map((movie, idx) => (
                    <li key={idx}>{movie}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Directors;


