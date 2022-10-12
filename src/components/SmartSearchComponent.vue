<script setup lang="ts">
import router from "@/router";
import { useMovieStore } from "@/stores/movies";

const movieStore = useMovieStore();

const search = () => {
  movieStore.getMovies();
  router.push({ path: "/" });
};
</script>

<template>
  <input v-model.trim="movieStore.query" />
  <button @click="search">Search</button>
</template>
