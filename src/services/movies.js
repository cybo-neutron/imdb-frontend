import axios from "axios";
import { Navigate, Router } from "react-router-dom";

const url = "http://localhost:5000";

async function getMovies() {
  const res = await axios.get(`${url}/api/movies`);

  return res.data;
}

async function createMovie(name, imdb, director, genre, popularity) {
  const res = await axios.post(`${url}/api/movies`, {
    name,
    imdb,
    director,
    genre,
    popularity,
  });

  console.log(res);
}

async function searchMovie(name) {
  const res = await axios.get(`${url}/api/movies/${name}`);
  console.log(res);
  return res.data;
}

async function deleteMovie(id) {
  console.log(id);
  const res = await axios.delete(`${url}/api/movies/delete/${id}`);
}

const movieService = {
  getMovies,
  createMovie,
  searchMovie,
  deleteMovie,
};

export default movieService;
