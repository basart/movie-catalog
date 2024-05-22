import { useEffect } from "react";

import { api } from "@/services/api";
import { movieStore, useMovieStore } from "@/stores/movie-store";
import useDebounce from "./use-debounce";

function useMoviesQuery(searchPhrase: string) {
  const currentPage = useMovieStore((state) => state.currentPage);

  const debouncedSearchPhrase = useDebounce(searchPhrase);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        movieStore.setState({ isLoading: true });
        const data = await api.movies.getMovies({
          signal: controller.signal,
          params: {
            s: debouncedSearchPhrase,
            page: currentPage,
          },
        });
        const { movies, totalMovies, response, error } = data || {};

        if (!response) {
          throw error;
        }

        if (!movies || !Array.isArray(movies)) {
          throw "Error: invalid Movies response";
        }

        movieStore.setState({
          movies,
          total: totalMovies,
          searchPhrase: debouncedSearchPhrase,
        });
      } catch (error) {
        console.log("Error", error);
        movieStore.resetMovies();
      } finally {
        movieStore.setState({ isLoading: false });
      }
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [debouncedSearchPhrase, currentPage]);
}

export { useMoviesQuery };
