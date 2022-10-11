<script setup lang="ts">
interface Props {
  title: string;
  image: string;
}
defineProps<Props>();
</script>

<template>
  <div class="poster">
    <img class="image" :src="image" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/global.scss";

.poster {
  position: relative;
  width: 100%;
  max-width: 300px;

  .title {
    @extend .heading-font;
    font-size: 2rem;
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-overflow: wrap;
  }

  .image {
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
    border: 10px solid white;
  }
}
</style>
