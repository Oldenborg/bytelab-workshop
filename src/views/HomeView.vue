<script setup lang="ts">
import { ref } from "vue";
import PosterTile from "@/components/PosterTile.vue";
import RoundButton from "../components/RoundButton.vue";
import HeartIcon from "../components/icons/HeartIcon.vue";
import TrashIcon from "../components/icons/TrashIcon.vue";
import { useMovieStore, type Movie } from "@/stores/movies";
import { useCollectionStore } from "@/stores/collection";

const query = ref<string>("");
const movies = ref<Movie[] | null>([]);

const movieStore = useMovieStore();
const collectionStore = useCollectionStore();

const search = async () => {
  movieStore.getMovies(query.value);
};

const addMovie = (movie: Movie) => {
  collectionStore.addMovie(movie);
};

const removeMovie = (movie: Movie) => {
  collectionStore.removeMovie(movie);
};

const inCollection = (movie: Movie) => {
  return movies.value?.includes(movie);
};
</script>

<template>
  <h1>My Movie collection!</h1>
  <p>Searching for {{ query }}</p>
  <input v-model.trim="query" />

  <ul v-if="collectionStore.movies">
    <li v-for="movie in collectionStore.movies" :key="movie.imdbID">
      {{ movie.Title }}
    </li>
  </ul>

  <button @click="search">Search</button>

  <template v-if="movieStore.movies">
    <div v-for="movie in movieStore.movies" class="movie" :key="movie.imdbID">
      <PosterTile :title="movie.Title" :image="movie.Poster" :year="movie.Year">
        <template #top>
          <template v-if="!inCollection(movie)">
            <RoundButton @click="addMovie(movie)" success>
              <HeartIcon width="20px"></HeartIcon>
            </RoundButton>
          </template>
          <template v-else>
            <RoundButton @click="removeMovie(movie)" danger>
              <TrashIcon width="20px"></TrashIcon>
            </RoundButton>
          </template>
        </template>
      </PosterTile>
    </div>
  </template>
</template>
