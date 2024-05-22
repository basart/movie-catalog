import { movieStore, useMovieStore } from "@/stores/movie-store";
import { MovieList } from "../MovieList";
import { Pagination } from "../Pagination";
import styles from "./movie-grid.module.css";

const PAGE_LIMIT = 10;

function handlePageChange(currentPage: number) {
  movieStore.setState({ currentPage });
}

function MovieGrid() {
  const isLoading = useMovieStore((state) => state.isLoading);
  const searchPhrase = useMovieStore((state) => state.searchPhrase);
  const movies = useMovieStore((state) => state.movies);
  const total = useMovieStore((state) => state.total);
  const currentPage = useMovieStore((state) => state.currentPage);

  const isMoviesExist = Array.isArray(movies) && movies.length != 0;
  const pageNumbers = Math.ceil(total / PAGE_LIMIT);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isMoviesExist ? (
        <>
          <p className="mb-8">
            You searched for: {searchPhrase}, {total} results found
          </p>

          <div className={styles["card-list"]}>
            <MovieList movies={movies} />
          </div>
        </>
      ) : (
        <div>No data to display!</div>
      )}

      {!!total && (
        <div className={styles["pagination-container"]}>
          <Pagination
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            onChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
}

export default MovieGrid;
