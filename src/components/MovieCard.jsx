import React from "react";
import movieService from "../services/movies";

function MovieCard(props) {
  const { _id, name, imdb, popularity, director, genre, isAdmin } = props;

  function handleDelete() {
    movieService.deleteMovie(_id);
  }
  return (
    <div className="bg-gray-700 p-2 text-slate-200">
      <div className="font-xl font-bold">Name : {name}</div>
      <div className="">imdb : {imdb}</div>
      <div className="">popularity : {popularity}</div>
      <div className="font-lg font-bold"> Director : {director}</div>
      <div className="font-sm">Genre : {genre}</div>
      {isAdmin && (
        <button
          className="bg-orange-200 px-2 text-black mt-2 font-bold"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default MovieCard;
