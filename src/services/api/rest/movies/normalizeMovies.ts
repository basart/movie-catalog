import { MovieItem, MoviesData, MoviesResponse } from "../../types";

function normalizeMovies(data: MoviesResponse): MoviesData {
  const {
    Response: response,
    totalResults: totalMovies,
    Error: error,
    Search: movies,
  } = data || {};

  const normalizedMovies: MovieItem[] | undefined = movies?.map((movie) => ({
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
    imdbID: movie.imdbID,
    type: movie.Type,
  }));

  console.log(totalMovies);

  return {
    response,
    movies: normalizedMovies,
    totalMovies,
    error,
  };
}

export { normalizeMovies };
