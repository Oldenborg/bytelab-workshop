import { defineStore } from "pinia";

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MoviesState {
  query: string;
  movies: Movie[];
}

export const useMovieStore = defineStore({
  id: "movies",
  state: (): MoviesState => ({
    query: "",
    movies: [],
  }),
  actions: {
    async getMovies() {
      const request = await fetch(
        `http://www.omdbapi.com/?s=${this.query}&apikey=fdb9148b`
      );
      const data = await request.json();
      this.movies = data.Search;
    },
  },
});
