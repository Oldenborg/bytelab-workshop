<script setup lang="ts">
import { useMovieStore } from "@/stores/movies";
import { ref } from "vue";

const movieStore = useMovieStore();

const query = ref<string>("");
const search = async () => {
  movieStore.getMovies(query.value);
};
</script>

<template>
  <input v-model.trim="query" />
  <button @click="search">Search</button>
</template>
