type MovieSearchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MoviesResponse = {
  Response: boolean;
  Search?: MovieSearchItem[];
  totalResults?: number;
  Error?: string;
};

export type MovieItem = {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
};

export type MoviesData = {
  response: boolean;
  movies?: MovieItem[];
  totalMovies?: number;
  error?: string;
};
