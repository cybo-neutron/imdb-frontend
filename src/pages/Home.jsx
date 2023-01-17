import React, { useEffect, useRef, useState } from "react";
import movieService from "../services/movies";
import AddMovie from "../components/AddMovie";
import MovieCard from "../components/MovieCard";
import { Link, Navigate } from "react-router-dom";
import lodash from "lodash";

function Home() {
  const [movies, setMovies] = useState();
  const [adminMode, setAdminMode] = useState(false);
  //   const [searchWord, setSearchWord] = useState("");
  const searchRef = useRef();
  async function fetchMovies() {
    const res = await movieService.getMovies();

    setMovies(res);
  }

  function changeAdminMode() {
    setAdminMode((prev) => !prev);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  async function handleSearch() {
    const searchWord = searchRef.current.value;
    const res = await movieService.searchMovie(searchWord);
    setMovies(res);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex self-center mt-3">
        <input type="text" ref={searchRef} />
        <button
          className="bg-orange-500 px-3 font-semibold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="pl-4">
        <input type="checkbox" name="admin" id="" onChange={changeAdminMode} />{" "}
        Admin mode
        {adminMode && (
          <button className="bg-orange-600 w-fit px-2 mx-5">
            <Link to="/add">Add Movie</Link>
          </button>
        )}
      </div>

      <div className="flex gap-2 mt-4 px-4">
        {movies &&
          movies.map((movie) => {
            return <MovieCard {...movie} key={movie._id} isAdmin={adminMode} />;
          })}
      </div>
    </div>
  );
}

export default Home;
