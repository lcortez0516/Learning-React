import React from "react";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState([
    {
      id: 1,
      title: "Equalize1",
      year: "1998",
      rating: 11230,
    },
    {
      id: 2,
      title: "Equalize2",
      year: "1928",
      rating: 123423010,
    },
    {
      id: 3,
      title: "Equalize3",
      year: "1798",
      rating: 102342310,
    },
  ]);

  const changeTitle = () => {
    setMovie(
      movie.map((m) => (m.id === 2 ? { ...m, title: "HOTDOG Overgrow" } : m))
    );
  };

  return (
    <div>
      {movie.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
          <p>{m.year}</p>
          <p>{m.rating}</p>
        </div>
      ))}

      <button onClick={changeTitle}>Change title</button>
    </div>
  );
};

export default App;
