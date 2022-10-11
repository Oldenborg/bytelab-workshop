import { defineStore } from "pinia";

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MoviesState {
  movies: Movie[];
}

export const useMovieStore = defineStore({
  id: "movies",
  state: (): MoviesState => ({
    movies: [],
  }),
  actions: {
    async getMovies(s: string) {
      const request = await fetch(
        `http://www.omdbapi.com/?s=${s}&apikey=fdb9148b`
      );
      const data = await request.json();
      this.movies = data.Search;
    },
  },
});
