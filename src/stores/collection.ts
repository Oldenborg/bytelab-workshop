import { defineStore } from "pinia";
import type { Movie } from "./movies";

export interface CollectionState {
  movies: Movie[];
}

export const useCollectionStore = defineStore({
  id: "collection",
  state: (): CollectionState => ({
    movies: [],
  }),

  actions: {
    addMovie(movie: Movie) {
      this.movies.push(movie);
    },
    removeMovie(movie: Movie) {
      this.movies =
        this.movies.filter((m) => {
          return m != movie;
        }) || [];
    },
  },
});
