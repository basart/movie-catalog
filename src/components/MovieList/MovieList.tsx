import { memo } from "react";

import { MovieCard } from "@/components/MovieCard";
import { MovieItem } from "@/services/api";
import { Maybe } from "@/types";

function MovieList({ movies }: { movies: Maybe<MovieItem[]> }) {
  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  return (
    <>
      {movies.map(({ title, poster, imdbID, type, year }) => (
        <MovieCard
          key={imdbID}
          title={title}
          poster={poster}
          type={type}
          imdbID={imdbID}
          year={year}
        />
      ))}
    </>
  );
}

export default memo(MovieList);
