<script setup lang="ts">
import PosterTile from "@/components/PosterTile.vue";
import RoundButton from "../components/RoundButton.vue";
import HeartIcon from "../components/icons/HeartIcon.vue";
import TrashIcon from "../components/icons/TrashIcon.vue";
import { useMovieStore, type Movie } from "@/stores/movies";
import { useCollectionStore } from "@/stores/collection";
import NavigationBar from "../components/NavigationBar.vue";

const movieStore = useMovieStore();
const collectionStore = useCollectionStore();

const addMovie = (movie: Movie) => {
  collectionStore.addMovie(movie);
};

const removeMovie = (movie: Movie) => {
  collectionStore.removeMovie(movie);
};

const inCollection = (movieId: string) => {
  return collectionStore.hasMovie(movieId);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <NavigationBar />
      </div>
    </div>

    <template v-if="movieStore.movies">
      <div class="row">
        <div
          v-for="movie in movieStore.movies"
          class="col-xs-6 col-sm-4 col-md-3 col-lg-2"
          :key="movie.imdbID"
        >
          <PosterTile
            :title="movie.Title"
            :image="movie.Poster"
            :year="movie.Year"
            class="bully"
          >
            <template #top>
              <template v-if="!inCollection(movie.imdbID)">
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
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.bully {
  margin-bottom: 40px;
}
</style>
