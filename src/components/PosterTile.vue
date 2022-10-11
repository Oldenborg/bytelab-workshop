<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  year: string;
}
defineProps<Props>();
</script>

<template>
  <div class="poster">
    <img class="image" :src="image" />
    <div class="title">{{ title }}</div>
    <div class="year">{{ year }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

.poster {
  width: 100%;
  max-width: 300px;
  position: relative;

  .title {
    @extend .heading-font;
    font-size: 2rem;
    text-overflow: wrap;
  }

  .image {
    width: 100%;
    box-sizing: border-box;
    border: 10px solid white;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  }

  .year {
    @extend .body-font;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
}
</style>
