import React from "react";

function MovieCard(props) {
  const { name, imdb, popularity, director, genre } = props;
  return (
    <div className="bg-gray-700 p-2">
      <div className="font-xl font-bold">Name : {name}</div>
      <div className="">imdb : {imdb}</div>
      <div className="">popularity : {popularity}</div>
      <div className="font-lg font-bold"> Director : {director}</div>
      <div className="font-sm">Genre : {genre}</div>
    </div>
  );
}

export default MovieCard;
