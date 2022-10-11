<script setup lang="ts">
import { computed, ref } from "vue";
import PosterTile from "@/components/PosterTile.vue";
import RoundButton from "../components/RoundButton.vue";
import HeartIcon from "../components/icons/HeartIcon.vue";
import TrashIcon from "../components/icons/TrashIcon.vue";

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

const inCollection = (movie) => {
  return movies.value?.includes(movie);
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
