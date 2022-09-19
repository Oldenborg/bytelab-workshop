<script setup lang="ts">
import { ref } from "vue";

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const query = ref<string | null>(null);
const data = ref<any | null>(null);
const movies = ref<Movie[] | null>([]);

const search = async () => {
  const request = await fetch(
    `http://www.omdbapi.com/?s=${query.value}&apikey=fdb9148b`
  );
  console.log(request);
  data.value = await request.json();
};

const addMovie = (movie: Movie) => {
  movies.value?.push(movie);
};
</script>

<template>
  <h1>My Movie collection!</h1>
  <p>Searching for {{ query }}</p>
  <input v-model.trim="query" />

  <ul v-if="movies">
    <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title }}</li>
  </ul>

  <button @click="search">Search</button>

  <template v-if="data">
    <div v-for="movie in data.Search" class="movie" :key="movie.imdbID">
      <div class="title">{{ movie.Title }}</div>
      <div class="poster">
        <img :src="movie.Poster" />
      </div>
      <button @click="addMovie(movie)">Add to collection</button>
    </div>
  </template>
</template>
