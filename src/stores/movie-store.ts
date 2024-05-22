import { useCallback, useSyncExternalStore } from "react";
import { Maybe } from "@/types";
import { MovieItem } from "@/services/api";

interface MovieState {
  isLoading: boolean;
  movies: Maybe<MovieItem[]>;
  total: number;
  searchPhrase: string;
  currentPage: number;
}

const initialMovieState: MovieState = {
  isLoading: false,
  movies: null,
  total: 0,
  searchPhrase: "",
  currentPage: 1,
};

const movieStore = {
  state: initialMovieState,
  listeners: new Set<() => void>(),
  getState() {
    return movieStore.state;
  },
  setState(nextState: Partial<MovieState>) {
    movieStore.state = { ...movieStore.state, ...nextState };
    movieStore.listeners.forEach((listener) => listener());
  },
  subscribe(cb: () => void) {
    movieStore.listeners.add(cb);
    return () => movieStore.listeners.delete(cb);
  },
  resetMovies() {
    movieStore.setState({
      movies: null,
      total: 0,
      currentPage: 1,
    });
  },
  reset() {
    movieStore.setState({ ...initialMovieState });
  },
};

function useMovieStore<MovieStateOutput>(
  selector: (state: MovieState) => MovieStateOutput
) {
  return useSyncExternalStore(
    movieStore.subscribe,
    useCallback(() => selector(movieStore.getState()), [selector])
  );
}

export { movieStore, useMovieStore };
