import NavBar from "../components/NavBar";

import actorsData from '../../db.json';

function Actors() {
  const actors = actorsData.actors;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors && actors.length > 0 && (
          <div>
            {actors.map((actor) => (
              <div key={actor.id}>
                <h2>{actor.name}</h2>
                <ul>
                  {actor.movies.map((movie, idx) => (
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

export default Actors;


