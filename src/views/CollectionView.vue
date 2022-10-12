<script setup lang="ts">
import PosterTile from "@/components/PosterTile.vue";
import RoundButton from "@/components/RoundButton.vue";
import { useCollectionStore } from "@/stores/collection";
import type { Movie } from "@/stores/movies";
import NavigationBar from "../components/NavigationBar.vue";
import TrashIcon from "../components/icons/TrashIcon.vue";

const collectionStore = useCollectionStore();

const removeMovie = (movie: Movie) => {
  collectionStore.removeMovie(movie);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <NavigationBar />
        <h1>Collection</h1>

        <template v-if="collectionStore.movies.length != 0">
          <div class="row">
            <div
              v-for="movie in collectionStore.movies"
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
                  <RoundButton @click="removeMovie(movie)" danger>
                    <TrashIcon width="20px"></TrashIcon>
                  </RoundButton>
                </template>
              </PosterTile>
            </div>
          </div>
        </template>
        <template v-else
          ><p>There are no movies in your collection</p>
        </template>
      </div>
    </div>
  </div>
</template>
