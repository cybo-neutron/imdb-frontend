import React, { useRef } from "react";
import movieService from "../services/movies";

function AddMovie() {
  const nameRef = useRef();
  const imdbRef = useRef();
  const directorRef = useRef();
  const genreRef = useRef();
  const popRef = useRef();

  function handleCreate() {
    const name = nameRef.current.value;
    const imdb = imdbRef.current.value;
    const director = directorRef.current.value;
    const genre = genreRef.current.value;
    const popularity = popRef.current.value;

    movieService.createMovie(name, imdb, director, genre, popularity);
  }

  return (
    <div className="flex flex-col gap-1 bg-slate-500 p-6">
      <input type="text" placeholder="name" ref={nameRef} />
      <input type="text" placeholder="imdb score" ref={imdbRef} />
      <input type="text" placeholder="director" ref={directorRef} />
      <input type="text" placeholder="genre" ref={genreRef} />
      <input type="text" placeholder="popularity" ref={popRef} />
      <button className="bg-orange-400" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}

export default AddMovie;

/*
 name: String,
  imdb_score: Number,
  director: String,
  genre: Array,
  popularity: Number,
*/
