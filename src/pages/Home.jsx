import React, { useEffect, useState } from "react";
import movieService from "../services/movies";
import AddMovie from "../components/AddMovie";
import MovieCard from "../components/MovieCard";
import { Link, Navigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState();
  async function fetchMovies() {
    const res = await movieService.getMovies();
    console.log(res);
    setMovies(res);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex self-center mt-3">
        <input type="text" />
        <button className="bg-orange-500 px-3 font-semibold">Search</button>
      </div>

      <button className="bg-orange-600 w-fit px-2">
        <Link to="/add">Add Movie</Link>
      </button>

      <div className="flex gap-2 mt-4 px-4">
        {movies &&
          movies.map((movie) => {
            return <MovieCard {...movie} key={movie._id} />;
          })}
      </div>
    </div>
  );
}

export default Home;
