import makeRequest, { RequestOptions } from "../../makeRequest";
import { MoviesResponse } from "../../types";
import { normalizeMovies } from "./normalizeMovies";

export async function getMovies(options?: RequestOptions) {
  const { data } = await makeRequest<MoviesResponse>({
    url: "/",
    method: "GET",
    ...options,
  });

  return normalizeMovies(data);
}
