import axios from "axios";

const url = "http://localhost:5000";

async function getMovies() {
  const res = await axios.get(`${url}/api/movies`);
  console.log("Getting movies");
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

const movieService = {
  getMovies,
  createMovie,
};

export default movieService;
